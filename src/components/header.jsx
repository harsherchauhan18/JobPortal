import { BriefcaseBusiness, Heart, Link, PenBox } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { SignIn, UserButton } from "@clerk/clerk-react";
import { useSearchParams } from "react-router-dom";

const Header = () => {
  const [showSignIn, setShowSignIn] = useState(false);
  
  const [Search, setSearch] = useSearchParams();

  useEffect(() => {
    if (Search.get("sign-in")) {
      setShowSignIn(true);
    }
  }, [Search]);

  const handleOverlayClick=(e)=>{
    if(e.target === e.currentTarget){
      setShowSignIn(false);
      setSearch({});
    }
  }
    return (
      <>
        <nav className="py-4 flex justify-betweeen items-center"> 
          <Link>
          <img src="/logo.png" className="h-20"/>
          </Link>

      <div className="flex gap-8">
         <SignedOut>
          <Button variant="outline" onClick={() => setShowSignIn(true)}>
            Login
          </Button>
      </SignedOut>
      <SignedIn>
        {/* add a condition here */}
        <Button variant='destructive' className='rounded-full'>
          <PenBox size={20} className='mr-2'/>
          Post a job
        </Button>
        <Link to="/post-job"> </Link>
        <UserButton appearance={{
          elements:{
            avatarBox:"w-10 h-10"
          },
        }}
        >
          <UserButton.MenuItems>
            <UserButton.Link
            label="My Jobs"
            labelIcon={<BriefcaseBusiness size={15}/>}
            href="/my-jobs"
            />
            <UserButton.Link
            label="Saved jobs"
            labelIcon={<Heart size={15}/>}
            href="/saved-jobs"
            />
          </UserButton.MenuItems>

        </UserButton>

      </SignedIn>
      </div>
        </nav>

        {showSignIn && (
          <div className="fixed insert-0 flex items-center justify-center bg-black bg-opacity-50"
          onClick={handleOverlayClick}
          >
          <SignIn
          signUpForceRedirectUrl="/onboarding"
          fallbackRedirectUrl="/onboarding"
          />
          </div>
          )}
      </>
    );
  };
  
  export default Header;