import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">HETAN Kano Chapter</h3>
            <p className="text-muted-foreground">
              Promoting excellence in Home Economics education throughout Kano State.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#objectives" className="text-muted-foreground hover:text-primary transition-colors">
                  Our Objectives
                </Link>
              </li>
              <li>
                <Link href="#activities" className="text-muted-foreground hover:text-primary transition-colors">
                  Activities
                </Link>
              </li>
              <li>
                <Link href="#showcase" className="text-muted-foreground hover:text-primary transition-colors">
                  Member Showcase
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <address className="not-italic text-muted-foreground">
              <p>Home Economics Department</p>
              <p>Kano State Ministry of Education</p>
              <p>Kano, Nigeria</p>
              <p className="mt-2">Email: info@hetankano.org</p>
            </address>
          </div>
        </div>
        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} HETAN Kano Chapter. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
