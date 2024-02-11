const FeatureListSection2 = () => {
  return (
    <section className="text-gray-700 body-font border-t border-gray-200">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        {/* Image Section */}
        <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
          <img
            alt="feature"
            className="object-cover object-center h-full w-full"
            src="/images/pexels-mechanical.jpg"
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
          {/* Feature 1 */}
          <div className="flex flex-col mb-10 lg:items-start items-center">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                Pourquoi prendre rendez-vous en ligne ?
              </h2>
              <p className="leading-relaxed text-base">
                En prenant rendez-vous en ligne, vous évitez les files d'attente
                au téléphone ou à notre centre auto, et vous pouvez sélectionner
                l'heure qui convient le mieux à votre emploi du temps. De plus,
                vous recevrez une confirmation de rendez-vous par appel
                téléphonique, ce qui vous permettra de vous organiser en
                conséquence.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col mb-10 lg:items-start items-center">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                Comment prendre rendez-vous en ligne ?
              </h2>
              <p className="leading-relaxed text-base">
                Il est très facile de prendre rendez-vous en ligne. Il vous
                suffit de sélectionner l'emplacement de notre centre auto qui
                vous convient le mieux, de choisir la date et l'heure
                souhaitées, et de remplir le formulaire en ligne. Vous recevrez
                ensuite une confirmation de rendez-vous par appel téléphonique.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col mb-10 lg:items-start items-center">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                Notre équipe
              </h2>
              <p className="leading-relaxed text-base">
                Notre équipe est constituée de techniciens qualifiés et
                expérimentés, qui sont passionnés par l'automobile et qui sont
                là pour vous offrir les meilleurs services pour votre véhicule.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureListSection2;
