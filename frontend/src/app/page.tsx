import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-black text-white flex flex-col items-center justify-center p-4">
      <main className="max-w-4xl text-center space-y-8">
        <h1 className="text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
          VeriHire
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          The future of credential verification. Tamper-proof, instant, and built on the blockchain.
        </p>

        <div className="flex gap-4 justify-center">
          <Link
            href="/sign-in"
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full font-semibold transition-all shadow-lg hover:shadow-blue-500/25"
          >
            Get Started
          </Link>
          <Link
            href="/verify"
            className="px-8 py-3 bg-gray-800 hover:bg-gray-700 rounded-full font-semibold transition-all border border-gray-700"
          >
            Verify a Doc
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 text-left">
          <div className="p-6 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10">
            <h3 className="text-xl font-bold mb-2 text-blue-300">Upload</h3>
            <p className="text-gray-400">Securely upload your credentials. We hash them instantly.</p>
          </div>
          <div className="p-6 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10">
            <h3 className="text-xl font-bold mb-2 text-purple-300">Verify</h3>
            <p className="text-gray-400">Issuers sign with their wallet. No more fake resumes.</p>
          </div>
          <div className="p-6 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10">
            <h3 className="text-xl font-bold mb-2 text-green-300">Share</h3>
            <p className="text-gray-400">Share a link. Recruiters verify in one click.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
