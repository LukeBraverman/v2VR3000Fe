import React, { useState } from "react";
import { Editor } from "primereact/editor";

interface RichTextEditorProps {
    setRteText: (text: string | null) => void; // Function prop accepting a string
    currentText: string | null;
}


export const RichTextEditor = ({currentText,setRteText}: RichTextEditorProps) => {


    return (
        <div className="card">

            <Editor value={currentText ? currentText : ''} onTextChange={(e) => setRteText(e.htmlValue)} style={{ height: '320px' }} />

        </div>
    )
};

