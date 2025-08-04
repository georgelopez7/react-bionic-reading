import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { BionicText } from "./bionic-text";
import { SplitForBionicText } from "@/utils/bionic.utils";
import { useBionic } from "../../store/useBionic";

vi.mock("../../store/useBionic");
describe("BionicText component", () => {
  describe("when Bionic Mode is enabled", () => {
    beforeEach(() => {
      vi.mocked(useBionic).mockReturnValue({
        bionicMode: true,
      });
    });

    const testCases = [
      "Hello world!",
      "This is a test",
      "SingleWord",
      "",
      "  leading and trailing spaces  ",
      "multiple   spaces",
      "punctuation, and. special! characters?",
    ];

    testCases.forEach((text) => {
      it(`renders "${text}" with bionic text`, () => {
        render(<BionicText text={text} />);
        const trimmedText = text.trim();
        if (!trimmedText) {
          const container = screen.queryByText(/.+/);
          expect(container).toBeNull();
          return;
        }

        const words = trimmedText.split(/\s+/);
        words.forEach((word) => {
          if (!word) return;
          const { bold, rest } = SplitForBionicText(word);
          const boldElement = screen.getByText(bold);
          expect(boldElement).toBeInTheDocument();
          expect(boldElement.tagName).toBe("STRONG");
          if (rest) {
            const restElement = screen.getByText(rest);
            expect(restElement).toBeInTheDocument();
            expect(restElement.tagName).not.toBe("STRONG");
          }
        });
      });
    });

    it("still renders bionic text when forceBionicMode is false", () => {
      const text = "Bionic";
      render(<BionicText text={text} forceBionicMode={false} />);
      const { bold, rest } = SplitForBionicText(text);

      const boldPart = screen.getByText(bold);
      expect(boldPart).toBeInTheDocument();
      expect(boldPart.tagName).toBe("STRONG");

      const restPart = screen.getByText(rest);
      expect(restPart).toBeInTheDocument();
      expect(restPart.tagName).not.toBe("STRONG");
    });

    it("renders text as a heading 1", () => {
      render(<BionicText text="Test Heading" as="h1" />);
      const headingElement = screen.getByRole("heading", { level: 1 });
      expect(headingElement).toBeInTheDocument();
      expect(headingElement.tagName).toBe("H1");
    });

    it("renders text as a heading 2", () => {
      render(<BionicText text="Test Heading" as="h2" />);
      const headingElement = screen.getByRole("heading", { level: 2 });
      expect(headingElement).toBeInTheDocument();
      expect(headingElement.tagName).toBe("H2");
    });

    it("renders text as a paragraph", () => {
      render(<BionicText text="Test Paragraph" as="p" />);
      const paragraphElement = screen.getByRole("paragraph");
      expect(paragraphElement).toBeInTheDocument();
      expect(paragraphElement.tagName).toBe("P");
    });

    it("renders text with custom styles", () => {
      const text = "Styled Text";
      const color = "rgb(255, 0, 0)";

      const { container } = render(
        <BionicText text={text} style={{ color: color }} />
      );
      const textElement = container.firstChild as HTMLElement;
      expect(textElement).toBeInTheDocument();
      expect(textElement).toHaveStyle(`color: ${color}`);
      expect(textElement).toHaveTextContent(text);
    });
  });

  describe("when Bionic Mode is disabled", () => {
    beforeEach(() => {
      vi.mocked(useBionic).mockReturnValue({ bionicMode: false });
    });

    it("renders plain text by default", () => {
      const text = "Plain text";
      render(<BionicText text={text} />);

      const element = screen.getByText(text);
      expect(element).toBeInTheDocument();

      const boldElements = screen.queryAllByRole("strong");
      expect(boldElements).toHaveLength(0);
    });

    it("renders plain text when forceBionicMode is false", () => {
      const text = "Plain text";
      render(<BionicText text={text} forceBionicMode={false} />);

      const element = screen.getByText(text);
      expect(element).toBeInTheDocument();

      const boldElements = screen.queryAllByRole("strong");
      expect(boldElements).toHaveLength(0);
    });

    it("renders bionic text when forceBionicMode is true", () => {
      const text = "Forced Bionic";
      render(<BionicText text={text} forceBionicMode={true} />);

      const words = text.split(/\s+/);
      words.forEach((word) => {
        const { bold, rest } = SplitForBionicText(word);
        const boldElement = screen.getByText(bold);
        expect(boldElement).toBeInTheDocument();
        expect(boldElement.tagName).toBe("STRONG");

        const restElement = screen.getByText(rest);
        expect(restElement).toBeInTheDocument();
        expect(restElement.tagName).not.toBe("STRONG");
      });
    });
  });
});
