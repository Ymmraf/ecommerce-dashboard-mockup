export default function Breadcrumbs({ nav }: { nav: string[] }) {
  const breadcrumbs = nav.join(' / ')
  return (
    <>
      <p className="mt-4 text-coal opacity-70 text-sm mb-4">Homepage / {breadcrumbs}</p>
    </>
  );
}
