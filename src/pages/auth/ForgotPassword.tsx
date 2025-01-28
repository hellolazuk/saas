import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/auth/reset-password`,
      });

      if (error) throw error;

      toast.success("পাসওয়ার্ড রিসেট লিংক আপনার ইমেইলে পাঠানো হয়েছে");
      navigate("/auth/login");
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-auth-gradient p-4">
      <Button
        variant="link"
        onClick={() => navigate("/")}
        className="absolute top-4 left-4 text-white hover:text-white/80 flex items-center gap-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
        Back to Home
      </Button>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-md"
      >
        <Card className="border-none shadow-xl bg-white/95 backdrop-blur-sm">
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-2xl font-bold text-primary">পাসওয়ার্ড ভুলে গেছেন?</CardTitle>
            <CardDescription className="text-muted">
              আপনার ইমেইল এড্রেস দিন, আমরা আপনাকে একটি রিসেট লিংক পাঠাবো
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleResetPassword} className="space-y-4">
              <div className="space-y-4">
                <Input
                  type="email"
                  placeholder="ইমেইল"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-white/50 border-gray-200 focus:border-primary focus:ring-primary"
                />
              </div>

              <Button
                type="submit"
                className="w-full py-5 text-base font-medium bg-primary hover:bg-primary-hover text-white transition-all duration-200"
                disabled={loading}
              >
                {loading ? "লোড হচ্ছে..." : "রিসেট লিংক পাঠান"}
              </Button>

              <div className="text-center text-sm text-muted mt-6">
                <Button
                  variant="link"
                  onClick={() => navigate("/auth/login")}
                  className="p-0 h-auto font-normal text-sm text-secondary hover:text-secondary-hover"
                >
                  লগইন পেজে ফিরে যান
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default ForgotPassword;
