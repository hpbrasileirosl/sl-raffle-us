"use client";

import { useRef, useState } from "react";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";

export default function UploadForm({
  onFileUpload,
}: {
  onFileUpload: (file: File) => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);

  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (file) {
      onFileUpload(file);
    }
  };

  return (
    <Card className="w-full max-w-md mz-auto">
      <CardHeader>
        <CardTitle>Ler Excel</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex items-center justify-center gap-2">
            <Input
              type="file"
              accept=".xlsx, .xls"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
              ref={inputRef}
              required
            />
            <Button
              type="button"
              onClick={() => {
                inputRef.current?.value && (inputRef.current.value = "");
                setFile(null);
              }}
            >
              X
            </Button>
          </div>
          <Button 
            type="submit" 
            className="flex items-center gap-2 bg-purple-600 px-4 py-2 rounded-md"
            disabled={!file}>
            Processar Arquivo
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
