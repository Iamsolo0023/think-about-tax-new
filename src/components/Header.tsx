import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { Menu, X, Phone, Mail, Clock, User, LogOut } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navigation with submenus
  const navigation = [
    { name: "ABOUT", href: "#about" },
    {
      name: "IT",
      submenu: [
        { name: "Articles", path: "/articles" },
        { name: "Notification", path: "/notification" },
        { name: "Circular", path: "/circular" },
        { name: "Press Release", path: "/press-release" }
      ]
    },
    {
      name: "GST",
      submenu: [
        { name: "Articles", path: "/gst-articles" },
        { name: "Notifications", path: "/gst-updates" },
        { name: "Circulars", path: "/gst-circulars" },
        { name: "Press Release", path: "/gst-circulars" }
      ]
    },
    {
      name: "OTHERS",
      submenu: [
        { name: "Articles", path: "/misc-articles" },
        { name: "News", path: "/reports" },
      ]
    },
    {
      name: "FOUNDERS",
      submenu: [
        { name: "About The Founder", path: "/our-story" },
        { name: "Audit Services", path: "/founders" },
        { name: "Audit Assignment", path: "/interviews" },
        { name: "Ask Your Query", path: "/interviews" }
      ]
    },
    { name: "COURSES", href: "#knowledge" },
    { name: "CONTACT US", href: "#contact" }
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4 text-sm">
        <div className="container mx-auto flex flex-wrap justify-between items-center gap-4">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>+91 62894 57089</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>govindagarwalji07@gmail.com</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>We are open 10:30 AM - 7:30 PM</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-elegant border-b border-border/50"
            : "bg-background"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-primary w-10 h-10 rounded-xl flex items-center justify-center text-primary-foreground font-bold text-lg shadow-glow">
                T
              </div>
              <div>
                <h1 className="text-xl font-bold text-primary">Think About Tax</h1>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">
                  Tax Consultants India
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8 relative">
              {navigation.map((item) => (
                <div key={item.name} className="relative group">
                  {item.submenu ? (
                    <>
                      <span className="text-foreground hover:text-primary transition-smooth link-underline font-medium cursor-pointer">
                        {item.name}
                      </span>
                      <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0 transform -translate-y-2 transition-all duration-300 z-50">
                        <ul className="py-2">
                          {item.submenu.map((sub) => (
                            <li key={sub.name}>
                              <Link
                                to={sub.path}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              >
                                {sub.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  ) : (
                    <a
                      href={item.href}
                      className="text-foreground hover:text-primary transition-smooth link-underline font-medium"
                    >
                      {item.name}
                    </a>
                  )}
                </div>
              ))}
            </nav>

            {/* Auth & CTA Buttons */}
            <div className="flex items-center space-x-4">
              {user ? (
                <div className="flex items-center space-x-3">
                  <span className="text-sm text-muted-foreground hidden sm:inline">
                    Welcome, {user.email}
                  </span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => signOut()}
                    className="flex items-center gap-2"
                  >
                    <LogOut className="h-4 w-4" />
                    <span className="hidden sm:inline">Sign Out</span>
                  </Button>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => navigate("/auth")}
                    className="hidden sm:inline-flex"
                  >
                    <User className="h-4 w-4 mr-2" />
                    Sign In
                  </Button>
                  <Button
                    variant="premium"
                    className="hidden sm:inline-flex"
                    onClick={() => navigate("/auth")}
                  >
                    Get Started
                  </Button>
                </div>
              )}

              {/* Mobile menu button */}
              <button
                className="md:hidden p-2 rounded-lg hover:bg-secondary transition-smooth"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-background border-t border-border/50 shadow-elegant">
            <div className="container mx-auto px-4 py-4 space-y-4">
              {navigation.map((item) =>
                item.submenu ? (
                  <div key={item.name}>
                    <span className="block font-medium">{item.name}</span>
                    <ul className="pl-4 space-y-2">
                      {item.submenu.map((sub) => (
                        <li key={sub.name}>
                          <Link
                            to={sub.path}
                            className="block text-sm text-gray-700 hover:text-primary"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {sub.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block text-foreground hover:text-primary transition-smooth font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                )
              )}

              {user ? (
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => {
                    signOut();
                    setIsMenuOpen(false);
                  }}
                  className="w-full mt-4"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Sign Out
                </Button>
              ) : (
                <Button
                  variant="premium"
                  size="lg"
                  className="w-full mt-4"
                  onClick={() => {
                    navigate("/auth");
                    setIsMenuOpen(false);
                  }}
                >
                  Get Started
                </Button>
              )}
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
