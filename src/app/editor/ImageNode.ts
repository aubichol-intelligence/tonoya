import { DecoratorNode } from "lexical";

type ImageNodeProps = {
  src: string;
  altText: string;
  width?: number;
  height?: number;
};

export class ImageNode extends DecoratorNode<React.ReactNode> {
  private src: string;
  private altText: string;
  private width?: number;
  private height?: number;

  constructor({ src, altText, width, height }: ImageNodeProps) {
    super();
    this.src = src;
    this.altText = altText;
    this.width = width;
    this.height = height;
  }

  static getType() {
    return "image";
  }

  static clone(node: ImageNode) {
    return new ImageNode({
      src: node.src,
      altText: node.altText,
      width: node.width,
      height: node.height,
    });
  }

  createDOM() {
    const img = document.createElement("img");
    img.src = this.src;
    img.alt = this.altText;
    if (this.width) img.style.width = `${this.width}px`;
    if (this.height) img.style.height = `${this.height}px`;
    return img;
  }

  updateDOM() {
    return false;
  }
}

export const $createImageNode = (props: ImageNodeProps) => {
  return new ImageNode(props);
};
