export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-4">Hello World Project</h1>
      <p className="text-xl mb-2">
        Visit <code className="font-mono bg-gray-200 p-1 rounded">/api/hello</code> for the Node.js/Next.js API
      </p>
      <p className="text-xl">
        Visit <code className="font-mono bg-gray-200 p-1 rounded">/api/hello.py</code> for the Python API
      </p>
    </main>
  )
}

