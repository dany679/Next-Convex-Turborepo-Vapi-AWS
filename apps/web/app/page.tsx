import { add } from "@workspace/math/add";
import { Button } from "@workspace/ui/components/button";

export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Web</h1>
        <div className="max-auto max-w-sm w-full">
          {JSON.stringify(users)}
          <Button size="sm" onClick={() => addUser()}>
            Add
          </Button>
        </div>
        {add(2, 3)}
      </div>
    </div>
  );
}
