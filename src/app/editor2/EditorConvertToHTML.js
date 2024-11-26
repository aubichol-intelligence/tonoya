'use client';

import React, { useState, useEffect } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import dynamic from "next/dynamic";

const Editor = dynamic(() => import("react-draft-wysiwyg").then((mod) => mod.Editor), {
    ssr: false, // Disable server-side rendering for this component
});
import draftToHtml from 'draftjs-to-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const EditorConvertToHTML = () => {
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        return () => setIsMounted(false); // Cleanup on unmount
    }, []);

    const handleEditorChange = (state) => {
        if (isMounted) {
            setEditorState(state);
        }
    };

    return (
        <div>
            <Editor
                editorState={editorState}
                wrapperClassName="demo-wrapper"
                editorClassName="demo-editor"
                onEditorStateChange={handleEditorChange}
            />
            <textarea
                disabled
                value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
            />
        </div>
    );
};

export default EditorConvertToHTML;