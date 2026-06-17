'use client'; // Обязательная директива для error boundary

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="container mx-auto p-6 text-center">
      <h1 className="text-3xl font-bold text-red-600 mb-4">Ошибка загрузки</h1>
      <p className="text-gray-600 mb-6">
        Не удалось загрузить список стран. Попробуйте позже.
      </p>
      <button
        onClick={reset}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Попробовать снова
      </button>
    </main>
  );
}