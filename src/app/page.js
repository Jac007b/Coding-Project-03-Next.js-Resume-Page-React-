export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-10">

      <header className="bg-gray-900 text-white p-6 rounded-lg">
        <h1 className="text-3xl font-bold mb-2">
          Jacob Weintraub
        </h1>

        <p className="text-gray-300">
          Email: Jwein123@comcast.net
        </p>

        <p className="mt-4">
          Business student interested in accounting, analytics, and technology.
        </p>
      </header>


      <section className="mt-6 border-t pt-6">

        <h2 className="text-xl font-bold mb-2">
          Education
        </h2>

        <p className="text-gray-700">
          University of South Florida
        </p>

        <p>
          Business Analytics & Information Systems
        </p>

      </section>


      <section className="mt-6 border-t pt-6">

        <h2 className="text-xl font-bold mb-2">
          Experience
        </h2>

        <ul className="text-gray-700 list-disc ml-6">
  <li>Silver Knights Chess Academy; teaching chess to kids.</li>
  <li>One Financial; working with SQL to create and pull data from databases.</li>
</ul>

      </section>


      <section className="mt-6 border-t pt-6">

        <h2 className="text-xl font-bold mb-2">
          Skills
        </h2>

        <ul className="list-disc ml-6">
          <li>JavaScript</li>
          <li>SQL</li>
          <li>Excel</li>
          <li>Tableau</li>
        </ul>

      </section>


    </main>
  );
}