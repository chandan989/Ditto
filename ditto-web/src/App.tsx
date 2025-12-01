import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Landing from "./pages/Landing";
import Lab from "./pages/Lab";
import Registry from "./pages/Registry";
import AgentDetail from "./pages/AgentDetail";
import Daycare from "./pages/Daycare";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner position="top-center" />
      <div className="scanlines"></div>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/lab" element={<Lab />} />
          <Route path="/registry" element={<Registry />} />
          <Route path="/agent/:id" element={<AgentDetail />} />
          <Route path="/daycare" element={<Daycare />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
