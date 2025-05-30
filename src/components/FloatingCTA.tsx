
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const FloatingCTA = () => {
  const isMobile = useIsMobile();

  if (!isMobile) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Link to="/consultation">
        <Button className="bg-trg-orange hover:bg-trg-orange/90 text-white font-montserrat font-semibold shadow-lg">
          Request Consultation
        </Button>
      </Link>
    </div>
  );
};

export default FloatingCTA;
