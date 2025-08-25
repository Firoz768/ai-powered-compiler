"use client";

import { useState } from "react";
import Editor from "@monaco-editor/react";
import { Button } from "@/components/ui/button";

export default function CompilerPage() {
  const [code, setCode] = useState<string>(
    `public class Main {
  public static void main(String[] args) {
    System.out.println("Hello, Javaro!");
  }
}`
  );
  const [output, setOutput] = useState<string>("");

  const runCode = async () => {
    setOutput("⏳ Running...");

    try {
      const res = await fetch("/api/compile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
      });
      const data = await res.json();
      setOutput(data.output || "⚠️ No output");
    } catch (err) {
      setOutput("❌ Error running code");
    }
  };

  return (
    <div className="p-6 flex flex-col gap-4 h-[calc(100vh-120px)]">
      <h1 className="text-2xl font-bold">Java Compiler</h1>

      {/* Split screen */}
      <div className="flex flex-1 gap-4">
        {/* Editor on left */}
        <div className="flex-1 flex flex-col border rounded-lg overflow-hidden">
          <Editor
            height="100%"
            defaultLanguage="java"
            theme="vs-dark"
            value={code}
            onChange={(value) => setCode(value || "")}
          />
          <div className="p-3 border-t bg-gray-50">
            <Button onClick={runCode}>Run Code</Button>
          </div>
        </div>

        {/* Output on right */}
        <div className="w-1/3 flex flex-col border rounded-lg bg-black text-green-400 font-mono text-sm">
          <div className="border-b border-gray-700 px-3 py-2 text-gray-300 font-semibold text-xs uppercase tracking-wider">
            Output
          </div>
          <div className="flex-1 overflow-auto p-3">
            <pre className="whitespace-pre-wrap">{output}</pre>
          </div>
        </div>
      </div>
    </div>
  );
}
