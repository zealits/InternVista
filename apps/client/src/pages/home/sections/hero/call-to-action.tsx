import { t } from "@lingui/macro";
import { Book, SignOut } from "@phosphor-icons/react";
import { Button } from "@reactive-resume/ui";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { useLogout } from "@/client/services/auth";
import { useAuthStore } from "@/client/stores/auth";

export const HeroCTA = () => {
  const { logout } = useLogout();
  const isLoggedIn = useAuthStore((state) => !!state.user);

  const buttonVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  if (isLoggedIn) {
    return (
      <>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={buttonVariants}
          transition={{ delay: 2, duration: 1 }}
        >
          <Button asChild size="lg">
            <Link to="/dashboard">{t`Go to Dashboard`}</Link>
          </Button>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={buttonVariants}
          transition={{ delay: 2.5, duration: 1 }}
        >
          <Button size="lg" variant="link" onClick={() => logout()}>
            <SignOut className="mr-3" />
            {t`Logout`}
          </Button>
        </motion.div>
      </>
    );
  }

  if (!isLoggedIn) {
    return (
      <>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={buttonVariants}
          transition={{ delay: 2, duration: 1 }}
        >
          <Button asChild size="lg">
            <Link to="/auth/login">{t`Get Started`}</Link>
          </Button>
        </motion.div>

        {/* 
        Uncomment this section if you want to apply the animation to the "Learn more" button as well.
        <motion.div
          initial="hidden"
          animate="visible"
          variants={buttonVariants}
          transition={{ delay: 2.5, duration: 1 }}
        >
          <Button asChild size="lg" variant="link">
            <a href="https://docs.rxresu.me" target="_blank" rel="noopener noreferrer nofollow">
              <Book className="mr-3" />
              {t`Learn more`}
            </a>
          </Button>
        </motion.div>
        */}
      </>
    );
  }

  return null;
};
