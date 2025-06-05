import Link from "next/link";

export default function NotFound() {
    return (
        <div className="h-screen flex flex-col items-center justify-center text-center">
            <h1 className="text-4xl font-bold">404</h1>
            <p className="mt-2 text-lg">Página não encontrada</p>
            <p className="mt-1 text-gray-500">Desculpe, a página que você está procurando não existe.</p>
            <p className="mt-4 text-sm text-gray-400">Você pode voltar para a <Link href="/" className="text-blue-500 hover:underline">página inicial</Link>.</p>
        </div>
    );
  }