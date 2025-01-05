import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { Geist, Geist_Mono } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import type { Metadata } from 'next';
import './globals.css';
import { AppSidebar } from '@/components/widgets/sidebar';
import Navbar from '@/components/widgets/navbar';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Kaizen',
	description: 'Kaizen App',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased dark:bg-[#09070D]`} /*suppressHydrationWarning*/>
				<ThemeProvider attribute='class' defaultTheme='dark' enableSystem disableTransitionOnChange>
					<SidebarProvider>
						<AppSidebar />
						<SidebarInset>
							<Navbar />
							<main>{children}</main>
						</SidebarInset>
					</SidebarProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
