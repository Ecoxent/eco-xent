import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req) => {
  if (req.method === "OPTIONS")
    return new Response(null, { headers: corsHeaders });

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    const response = await fetch(
      "https://ai.gateway.lovable.dev/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${LOVABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "google/gemini-3-flash-preview",
          messages: [
            {
              role: "system",
              content: `You are Eco-Xent's friendly AI assistant. You help customers with questions about Eco-Xent's organic, herbal personal care products (serums, hair oils, shampoos, soaps, conditioners, body lotions).

Key product info:
- Botanic Shield Serum: Advanced herbal defense with Hyaluronic Acid, Vitamin C, Rosehip Oil. Rs.1,550
- All-in-One Serum: Niacinamide, Vitamin C, Kojic Acid, Alpha Arbutin. Rs.1,500
- Hair Healer Oil: 13+ botanical oils for hair fall. Rs.750
- Herbal Shampoo: Sulfate-free with Neem & Amla. Rs.650
- Herbal Soap: Handcrafted with herbs. Rs.350
- Velvet Ritual Conditioner: Deep hydration. Rs.550
- Herbal Body Lotion: Natural moisturizing. Rs.450

All products are 100% organic, cruelty-free, and handcrafted in Pakistan.
WhatsApp: +92 329 5991062
Email: ecoxent@gmail.com

CRITICAL: Always reply in the SAME language the user writes in. If they write in Urdu, reply in Urdu. If Hindi, reply in Hindi. If English, reply in English. If Arabic, reply in Arabic. Support ALL languages naturally.

Be warm, helpful, and concise. Guide customers to products based on their skin/hair concerns.`,
            },
            ...messages,
          ],
          stream: true,
        }),
      }
    );

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "بہت زیادہ requests. Please try again later." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "Service temporarily unavailable." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      const t = await response.text();
      console.error("AI gateway error:", response.status, t);
      return new Response(
        JSON.stringify({ error: "AI service error" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("chat error:", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
