import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { BionicText } from "./bionic-text";

describe("BionicText component", () => {
  const testCases = [
    { text: "Hello world!", words: ["Hello", "world!"] },
    { text: "This is a test", words: ["This", "is", "a", "test"] },
    { text: "SingleWord", words: ["SingleWord"] },
    { text: "", words: [] },
    {
      text: "  leading and trailing spaces  ",
      words: ["leading", "and", "trailing", "spaces"],
    },
    { text: "multiple   spaces", words: ["multiple", "spaces"] },
    {
      text: "punctuation, and. special! characters?",
      words: ["punctuation,", "and.", "special!", "characters?"],
    },
  ];

  testCases.forEach(({ text, words }) => {
    it(`correctly bolds text for: "${text}"`, () => {
      render(<BionicText text={text} />);

      if (!text.trim()) {
        const container = screen.queryByText(/.+/);
        expect(container).toBeNull();
        return;
      }

      words.forEach((word) => {
        if (word) {
          const half = Math.ceil(word.length / 2);
          const bold = word.slice(0, half);
          const rest = word.slice(half);

          const boldElement = screen.getByText(bold);
          expect(boldElement).toBeInTheDocument();
          expect(boldElement.tagName).toBe("STRONG");

          if (rest) {
            const restElement = screen.getByText(rest);
            expect(restElement).toBeInTheDocument();
            expect(restElement.tagName).not.toBe("STRONG");
          }
        }
      });
    });
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
    expect(paragraphElement).toHaveTextContent("Test Paragraph");
  });

  it("applies custom styles", () => {
    const { container } = render(
      <BionicText text="Styled Text" style={{ color: "red" }} />
    );
    const textElement = container.firstChild as HTMLElement;
    expect(textElement).toBeInTheDocument();
    expect(textElement).toHaveStyle("color: rgb(255, 0, 0)");
    expect(textElement).toHaveTextContent("Styled Text");
  });
});
