
import { Inter } from 'next/font/google';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
                                       children,
                                   }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <aside id="sidebar" className="flex-[1] bg-gray-800 text-white">
                <nav>
                    <ul>
                        <li className="mb-2">
                            <a href="/dashboard" className="block p-2 hover:bg-gray-700 rounded">🏠 Home</a>
                        </li>
                        <li>
                            <a href="/dashboard/vodreview" className="block p-2 hover:bg-gray-700 rounded">⚙️ Vod
                                REVIEW</a>
                        </li>
                    </ul>
                </nav>
            </aside>

            {/* Main Content */}
            <main id="maincontent" className="flex-[5] p-6 bg-gray-100">
                {children}
            </main>
        </div>

    );
}
