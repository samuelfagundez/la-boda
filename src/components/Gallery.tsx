import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { assetUrl } from "../lib/asset";
import { content } from "../content";

export default function Gallery() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selected, setSelected] = useState(0);

  const scrollTo = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi]);
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

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

      <div className="relative mx-4 sm:mx-6">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4">
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

        <button
          type="button"
          aria-label="Foto anterior"
          onClick={scrollPrev}
          className="flex absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 items-center justify-center rounded-full bg-cream/90 text-green-dark shadow-lg hover:bg-cream transition-colors"
        >
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <button
          type="button"
          aria-label="Foto siguiente"
          onClick={scrollNext}
          className="flex absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 items-center justify-center rounded-full bg-cream/90 text-green-dark shadow-lg hover:bg-cream transition-colors"
        >
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
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
