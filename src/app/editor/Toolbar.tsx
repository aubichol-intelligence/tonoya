import React from "react";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $createImageNode } from "./ImageNode";

const Toolbar: React.FC = () => {
  const [editor] = useLexicalComposerContext();

  const insertImage = () => {
    const url = prompt("Enter Image URL:");
    if (url) {
      editor.update(() => {
        const imageNode = $createImageNode({
          src: url,
          altText: "Uploaded Image",
        });
        editor.insertNodes([imageNode]);
      });
    }
  };

  return (
    <div className="toolbar">
      <button onClick={insertImage}>Add Image</button>
    </div>
  );
};

export default Toolbar;
