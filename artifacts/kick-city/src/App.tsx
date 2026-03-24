import { Switch, Route, Router as WouterRouter } from "wouter";
import { AppLayout } from "@/components/layout/AppLayout";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Ventures from "@/pages/Ventures";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <AppLayout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/ventures" component={Ventures} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </AppLayout>
  );
}

function App() {
  return (
    <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
      <Router />
    </WouterRouter>
  );
}

export default App;
