import { ThermostatProvider } from './contexts/ThermostatContext';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  return (
    // tutto quello che sta dentro il Provider può leggere il termostato con useThermostat()
    <ThermostatProvider>
      <div className="flex min-h-dvh flex-col">
        <Header />
        {/* sidebar sopra il contenuto su telefono, a sinistra da sm in su */}
        <div className="mx-auto flex w-full max-w-4xl flex-1 flex-col gap-6 px-4 py-8 sm:flex-row">
          <Sidebar />
          <MainContent />
        </div>
        <Footer />
      </div>
    </ThermostatProvider>
  );
}

export default App;
