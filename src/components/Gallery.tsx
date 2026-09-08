import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { assetUrl } from "../lib/asset";
import { content } from "../content";

export default function Gallery() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selected, setSelected] = useState(0);

  const scrollTo = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section id="galeria" className="py-16 sm:py-24 bg-green-dark">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 mb-8">
        <p className="uppercase tracking-[0.2em] text-xs sm:text-sm text-gold font-semibold mb-3">
          Galería
        </p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-cream">
          Un vistazo a La Boda
        </h2>
      </div>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex px-4 sm:px-6 gap-4">
          {content.gallery.map((photo) => (
            <div
              key={photo.src}
              className="shrink-0 grow-0 basis-[80%] sm:basis-[45%] lg:basis-[30%]"
            >
              <img
                src={assetUrl(photo.src)}
                alt={photo.alt}
                loading="lazy"
                className="w-full h-72 sm:h-80 object-cover rounded-2xl"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-2 mt-6">
        {content.gallery.map((photo, i) => (
          <button
            key={photo.src}
            aria-label={`Ir a la foto ${i + 1}`}
            onClick={() => scrollTo(i)}
            className={`w-2 h-2 rounded-full transition-colors ${
              selected === i ? "bg-gold" : "bg-cream/30"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
