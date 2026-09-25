import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export default function NotFound() {
  return <><Header /><main className="repair-page container w-container">
    <p className="repair-eyebrow">Page not found</p><h1>Let’s help you find your way.</h1>
    <p>This address is no longer available. You can explore our services, find an office, or schedule a consultation below.</p>
    <div className="repair-actions"><a className="button w-button" href="/appointments">Schedule a consultation</a><a href="/service">Our services</a><a href="/locations">Office locations</a></div>
  </main><Footer /></>;
}
