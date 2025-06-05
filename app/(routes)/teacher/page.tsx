import { currentUser } from "@clerk/nextjs/server";
import { Header } from "./components/Header";

export default async function TeacherPage() {
    const user = await currentUser();

    if (!user) {
        return <p>Não autenticado</p>;
    }

    return (
        <div className="p-6">
            <Header />
        </div>
    );
}
