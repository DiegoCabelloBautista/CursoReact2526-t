import React, { Suspense, useState } from "react";
import Header from "./components/Header";
import { fetchPlatos } from "./utils/api";
import LoadingFallback from "./components/LoadingFallback";
import PlatosList from "./components/PlatosList";

const App = () => {

  const [platosPromise, setPlatosPromise] = useState(() => fetchPlatos());





  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <Header />
        {/* <ErrorBondary> */}
        <Suspense fallback={<LoadingFallback message="Cocinando platos para ti....🍽️" />}>
          <PlatosList platosPromise={platosPromise} />
        </Suspense>
        {/* </ErrorBondary> */}
      </div>
    </div>
  )
};

export default App;