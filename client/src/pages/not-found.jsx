import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="text-center max-w-md mx-auto p-6">
        <h1 className="text-6xl font-bold text-primary-600 dark:text-primary-400 mb-4">404</h1>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Page Not Found</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link href="/">
          <a className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
            Back to Home
          </a>
        </Link>
      </div>
    </div>
  );
}