interface TestComponentProps {
  title: string;
}

export default function TestComponent({ title }: TestComponentProps) {
  return (
    <div className="p-4 bg-primary-50 dark:bg-primary-950 rounded-lg">
      <h3 className="text-lg font-semibold text-primary-700 dark:text-primary-300">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mt-2">
        Test de l&apos;alias @/* - Types importés avec succès ✅
      </p>
    </div>
  );
}
