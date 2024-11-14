"use client";

import { Button } from "@/app/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";

export default function ImportForm({
    fnImport
  }: {
    fnImport: () => void;
  }) {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        fnImport();
    };
    
    return (
    <Card className="w-full max-w-md mz-auto">
      <CardHeader>
        <CardTitle>Importar</CardTitle>
      </CardHeader>
      <CardContent>
          <form onSubmit={handleSubmit}>
              <Button 
                type="submit"
                className="flex items-center gap-2 bg-purple-700 px-4 py-2 rounded-md"
                >
                  <span>Importar registro(s)</span>
              </Button>
          </form>
      </CardContent>
    </Card>
    );
}
