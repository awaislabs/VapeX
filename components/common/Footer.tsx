import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="mt-16 bg-brand pt-16 text-white">
      <Container>
        <div className="grid gap-10 pb-12 md:grid-cols-4">
          <div>
            <p className="mb-4 text-xl font-semibold uppercase tracking-[0.22em]">LOGO HERE</p>
            <p className="max-w-[240px] text-sm leading-6 text-white/80">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Explore</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>Home</li>
              <li>About Us</li>
              <li>Services</li>
              <li>Pages</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>Lorem ipsum dolor sit amet, consectetur 123 Newyork</li>
              <li>Realrealityone.com</li>
              <li>+94 5678 8997</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Social Media</h3>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 py-5 text-sm text-muted">
          <p className="text-white/80">CopyRight©2025 Project</p>
          <div className="flex gap-6">
            <a href="#" className="text-white/80">Privacy policy</a>
            <a href="#" className="text-white/80">Terms & Services</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
