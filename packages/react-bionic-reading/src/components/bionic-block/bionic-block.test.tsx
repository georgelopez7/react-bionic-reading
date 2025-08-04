import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { BionicBlock } from "./bionic-block";
import { SplitForBionicText } from "@/utils/bionic.utils";
import { useBionic } from "../../store/useBionic";

vi.mock("../../store/useBionic");
describe("BionicBlock component", () => {
  describe("when Bionic Mode is enabled", () => {
    beforeEach(() => {
      vi.mocked(useBionic).mockReturnValue({ bionicMode: true });
    });

    it("applies bionic formatting to plain text", () => {
      const text = "Hello world!";
      render(<BionicBlock>{text}</BionicBlock>);

      const words = text.split(/\s+/);

      words.forEach((word) => {
        const { bold, rest } = SplitForBionicText(word);

        expect(screen.getByText(bold)).toBeInTheDocument();
        expect(screen.getByText(bold).tagName).toBe("STRONG");

        expect(screen.getByText(rest)).toBeInTheDocument();
        expect(screen.getByText(rest).tagName).not.toBe("STRONG");
      });
    });

    it("handles forceBionicMode=false (still enabled by context)", () => {
      render(<BionicBlock forceBionicMode={false}>Forced Mode</BionicBlock>);
      expect(screen.getByText("For")).toBeInTheDocument();
    });

    it("renders children with punctuation and symbols", () => {
      render(<BionicBlock>Hello, world!</BionicBlock>);
      expect(screen.getByText("Hel")).toBeInTheDocument();
      expect(screen.getByText("lo,")).toBeInTheDocument();
    });

    it("renders children with nested elements", () => {
      render(
        <BionicBlock>
          <div>
            <span>Nested text</span>
          </div>
        </BionicBlock>
      );
      expect(screen.getByText("Nes")).toBeInTheDocument();
    });
  });

  describe("when Bionic Mode is disabled", () => {
    beforeEach(() => {
      vi.mocked(useBionic).mockReturnValue({ bionicMode: false });
    });

    it("renders plain children (no STRONG tags)", () => {
      const text = "Just text";
      render(<BionicBlock>{text}</BionicBlock>);

      expect(screen.getByText(text)).toBeInTheDocument();
      const boldElements = screen.queryAllByRole("strong");
      expect(boldElements).toHaveLength(0);
    });

    it("still renders bionic if forceBionicMode is true", () => {
      const text = "Force";
      render(<BionicBlock forceBionicMode={true}>{text}</BionicBlock>);

      const { bold } = SplitForBionicText(text);
      expect(screen.getByText(bold)).toBeInTheDocument();
    });
  });

  describe("edge cases", () => {
    it("renders nothing for empty string", () => {
      const { container } = render(<BionicBlock>{""}</BionicBlock>);
      expect(container).toBeEmptyDOMElement();
    });

    it("handles non-text elements with no content", () => {
      const { container } = render(
        <BionicBlock>
          <div />
          <span />
        </BionicBlock>
      );

      expect(container).not.toBeEmptyDOMElement();
      expect(screen.queryByText(/.+/)).toBeNull();
    });
  });
});
