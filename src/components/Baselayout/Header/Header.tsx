"use client";

import { useEffect, useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Menu, Search, Plus, User, LogIn } from 'lucide-react';
import Link from 'next/link';
import { Icon } from "@iconify/react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from 'next/navigation';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store';
import { setCredentials } from '@/store/slices/userSlice';
import UserMenu from '@/components/UserMenu';
import { handleLogout } from '@/utils/handleLogout';


export function Header() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);
  const isLoggedIn = useSelector((state: RootState) => state.auth.token);

  // console.log(user);
  // console.log(isLoggedIn);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const logout = () => {
    dispatch(setCredentials({ token: null, user: null }));
    router.push('/login');
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/products?q=${encodeURIComponent(searchQuery.trim())}`);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (searchQuery.trim().length > 3) {
        router.push(`/products?q=${encodeURIComponent(searchQuery.trim())}`);
      }
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="sticky top-0 z-50 bg-[#00b53f] shadow-sm w-full"
      >
        <div className="container mx-auto px-4 py-4 flex items-center max-w-[1440px] justify-between">
          <Link href="/" className="flex items-center">
            <span className="md:text-4xl text-xl text-white uppercase font-bold">
              Naijamart
            </span>
          </Link>
          <form onSubmit={handleSearch} className="hidden md:flex flex-1 mx-6">
            <motion.div whileFocus={{ scale: 1.02 }} className="relative w-full max-w-xl">
              <Input
                type="search"
                placeholder="What are you looking for?"
                className="w-full pl-10 rounded-l rounded-r-none"
                value={searchQuery}
                onKeyDown={handleKeyDown}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search products"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
            </motion.div>
            <Button type="submit" className="ml- rounded-r rounded-l-none bg-orange-400 py-3 text-white">Search</Button>
          </form>
          <div className="flex items-center space-x-2">
            <Button
              onClick={() => router.push('/post-ad')}
              variant="outline"
              size="sm"
              className="whitespace-nowrap text-white bg-orange-400 px-8">
              Sell
            </Button>
            <Button
              onClick={() => router.push('/brands')}
              variant="outline"
              size="sm"
              className="whitespace-nowrap text-white bg-orange-400 px-5">
              Brand
            </Button>
            <div className="text hidden md:flex items-center space-x-2">
              {isClient && Boolean(isLoggedIn) && user ? (
                <UserMenu
                  user={user}
                  dispatch={dispatch}
                />
              ) : (
                <Button asChild variant="outline" className="hidden md:flex">
                  <Link href="/login">
                    <LogIn size={18} className="mr-1" />
                    Login
                  </Link>
                </Button>
              )}
            </div>
            <div ref={menuRef}>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {!isMenuOpen ? (
                  <Menu className="text-white h-6 w-6 cursor-pointer" />
                ) : (
                  <Icon icon="mingcute:close-fill" className="text-white h-6 w-6 cursor-pointer" />
                )}
              </Button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden absolute top-full left-0 w-full z-40 bg-[#00b53f] p-4 shadow-lg border-t border-slate-200"
            >
              <form onSubmit={handleSearch} className="flex">
                <motion.div whileFocus={{ scale: 1.02 }} className="relative w-full md:max-w-xl">
                  <Input
                    type="search"
                    placeholder="What are you looking for?"
                    className="w-full"
                    value={searchQuery}
                    onKeyDown={handleKeyDown}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    aria-label="Search products"
                  />
                </motion.div>
                <Button type="submit" className="ml-2 bg-orange-400">
                  <Search size={18} />
                </Button>
              </form>
              <div className="mt-4 space-y-2">
                <Button asChild className="w-full justify-start bg-orange-400 text-white">
                  <Link href="/post-ad">
                    <Plus size={18} className="mr-2" />
                    Sell
                    {/* Post an Ad */}
                  </Link>
                </Button>
                {isClient && Boolean(isLoggedIn) && user ? (
                  <>
                    <Button asChild variant="outline" className="w-full justify-start">
                      <Link href="/profile">
                        <User size={18} className="mr-2" />
                        My Profile
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="w-full justify-start">
                      <Link href="/my-ads">
                        <Icon icon="material-symbols:ad-units" className="mr-2 text-base" />
                        My Ads
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="w-full justify-start">
                      <Link href="/favorites">
                        <Icon icon="mdi:heart" />
                        Favorites
                      </Link>
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-red-500 hover:bg-red-50"
                      onClick={() => handleLogout(router, dispatch)}>
                      <Icon icon="mdi:logout" className="mr-2 text-red-500" />
                      Logout
                    </Button>
                  </>
                ) : (
                  <Button asChild variant="outline" className="w-full justify-start">
                    <Link href="/login">
                      <LogIn size={18} className="mr-2 text-red-500" />
                      Login / Register
                    </Link>
                  </Button>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </motion.header>
    </>
  );
}

export default Header;
