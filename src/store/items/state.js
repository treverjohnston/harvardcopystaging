export default {
  reviews: [
    {
      name: 'Sara F.',
      review: 'These guys did a terrific job for me. Helped with final design, worked to get me the best pricing and then delivered the final product ahead of schedule. I\'ll definitely be calling them next time I need printing work done.',
      rating: 5,
      reviewer: 'Sara F.',
      id: 0,
      link: 'https://www.yelp.com/biz/harvard-print-and-copy-center-san-ramon?hrid=RnBFQQdQXHfJYWnjsNCoIA&utm_campaign=www_review_share_popup&utm_medium=copy_link&utm_source=(direct)'
    },
    {
      name: 'Gergana G.',
      review: 'Harvard Print & Copy Center has helped our office numerous times with business cards, appointment cards & personalized notepads. Harvard Copy is always prompt, reliable, friendly and their customer service is phenomenal! In the past our office has had bad luck with other printing services, in terms of shipping arrival and just overall satisfaction in the results delivered. We have never been unsatisfied with services by Harvard Print & Copy Center and we highly recommend them to anyone looking for printing services, no need to look elsewhere!',
      rating: 5,
      reviewer: 'Gergana G.',
      id: 1,
      link: 'https://www.yelp.com/biz/harvard-print-and-copy-center-san-ramon?hrid=eqYBxXHBw7UMplOIN1m7fw&utm_campaign=www_review_share_popup&utm_medium=copy_link&utm_source=(direct)'
    },
    {
      name: 'Monica F.',
      review: 'Fast and convenient with quality service.  Customer service and pricing GREAT!  Mark and staff know how to take care of their customers whether the job is big or small and are a pleasure to work with each time.  We use them for business monthly and they always go the extra mile to assure we are always satisfied.  Quality of work is superb!',
      rating: 5,
      reviewer: 'Monica F.',
      id: 2,
      link: 'https://www.yelp.com/biz/harvard-print-and-copy-center-san-ramon?hrid=Pk0L0u3LJAXpD8G2ZS5s6A&utm_campaign=www_review_share_popup&utm_medium=copy_link&utm_source=(direct)'
    },
  ],
  litigationServices: [
    {
      name: 'Document Scanning Services',
      description: ['Our document scanning services make it possible to have your files at your fingertips on a CD!', 'We can convert your paper documents to digital images and save them as Adobe files (.pdf), Summation files (.dii) or several other formats. Having your documents on CD provides numerous advantages over paper. Not only does it save space, but it also provides portability of records and printable backups of important documents.', 'Document scanning is the best solution for businesses that want to store their documents efficiently and securely, while reducing the need for costly storage facilities.'],
      pic: '../statics/litigation/documents.jpg'
    },
    {
      name: 'Trial Exhibits',
      description: ['The way you present evidence in the courtroom can make or break your case. Don’t let substandard trial exhibits jeopardize the outcome.', 'Harvard Litigation Services has a talented staff of graphic designers in-house who can create trial boards that capture attention.', 'Choose full photo-quality color or black and white, foam board mounting or lamination, standard or odd sizing. Harvard Litigation Services can make you shine in the courtroom.'],
      pic: '../statics/litigation/trial.jpg'
    },
    {
      name: 'Large Format & Blueprints',
      description: ['Harvard Litigation Services can handle any large format printing or copying job you need.', 'Oversized documents such as blueprints, marketing posters, banners, and signs, or photo enlargements for trial boards are a snap!', 'If you need an enlargement, reproduction of blueprints or engineering sketches, or any other specialized large format printing or duplication, we have the in-house experts to get it done.'],
      pic: '../statics/litigation/blueprint.jpg'
    },
    {
      name: 'Audio & Video Duplication',
      description: ['If you have recorded depositions or surveillance videos you need duplicated for trial, we can help.', 'With our highly-skilled staff of AV experts and state-of-the-art technology, Harvard Litigation Services can duplicate your CDs and DVDs with ease.', 'Your audio and video files are safe at our facility, and since we do all our audio and video duplication in-house, you will always know who is handling your media.'],
      pic: '../statics/litigation/recorded.jpg'
    },
    {
      name: 'High Speed Copying',
      description: ['Whether you need a single file copied or a file cabinet’s worth of documents, Harvard Litigation Services provides full-service, high speed, high volume copying and duplication for your law firm or business.', 'Using some of the most advanced imaging equipment in the industry, we can copy your documents in photo quality full color or black and white. You can be sure to get crisp, clear copies from your original documents, plus a variety of professional binding options including spiral and velo.', 'When you need high speed, high volume copying with free pick up and delivery, look no further than Harvard Litigation Services.'],
      pic: '../statics/litigation/copy.jpg'
    },
  ],
  cardServices: [
    {
      name: 'Print/Copy Services',
      icon: 'fa fa-paint-brush',
      class: 'col-xs-10 col-sm-4 col-md-5 bg-secondary text-white card',
      link: 'services',
    },
    {
      name: 'Litigation Services',
      icon: 'fa fa-file-invoice',
      class: 'col-xs-10 col-sm-4 col-md-5 text-white card bg-accent',
      link: 'litigation',
    },
    {
      name: 'About',
      icon: 'fa fa-users',
      class: 'col-xs-10 col-sm-4 col-md-5 text-white card bg-info',
      link: 'about',
    },
    {
      name: 'Contact/Request A Quote',
      icon: 'fa fa-paper-plane',
      class: 'col-xs-10 col-sm-4 col-md-5 text-white card bg-warning',
      link: 'contact',
    }

  ],
  services: [
    {
      name: 'Copy Service',
      subservices: [
        'Full Services Xerox B/W Copies',
        'Color Copies'
      ],
      id: 0,
      value: 'copy',
      class: 'bg-positive card',
      highlightClass: 'text-bold service bg-positive selected shadow-16',
      classMobile: 'bg-positive col-xs-10  expansion-space shadow-16'
    },
    {
      name: 'Direct Mail',
      subservices: [
        'Postal Metering',
        'Folding Direct Mail',
        'Envelope Printing',
        'Labeling and Ink-Jetting',
        'Every Door Direct Mail Printing and Bundling'
      ],
      id: 1,
      value: 'direct',
      class: 'bg-accent card',
      highlightClass: 'text-bold service bg-accent selected shadow-16',
      classMobile: 'bg-accent col-xs-10  expansion-space shadow-16'
    },
    {
      name: 'Office Printing',
      subservices: [
        'Business Cards',
        'Letterhead',
        'Envelopes',
        'Brochures',
        'Flyers',
        'Menus',
        'Newsletters',
        'Postcards',
        'Price Lists',
        'Manuals',
        'Booklets',
        'NCR Multiple Part Forms and Invoices'
      ],
      id: 2,
      value: 'office',
      class: 'bg-info card',
      highlightClass: 'text-bold service bg-info selected shadow-16',
      classMobile: 'bg-info col-xs-10  expansion-space shadow-16'
    },
    {
      name: 'Announcements and Invitations',
      subservices: [
        'We print on your stock (e.g. Papyrus or Paper Source purchased stock)',
        'We have our own stock',
        'Announcements, RSVP, Map and Directions, Accomodations',
        'We can use any color ink',
        'Envelopes printing, panelled card printing',
        'Christmas cards, Bar Mitzvah, Bas MItzvah',
        'Save the date',
        'We can print your guests name and address on each envelope'
      ],
      id: 3,
      value: 'announcements',
      class: 'bg-negative card',
      highlightClass: 'text-bold service bg-negative selected shadow-16',
      classMobile: 'bg-negative col-xs-10  expansion-space shadow-16'
    },
    {
      name: 'Graphics Design',
      subservices: [
        'Logo Design',
        'Page Layout',
        'Brochure Design',
        'Typesetting',
        'Scanning',
        'Color Correction'
      ],
      id: 4,
      value: 'graphics',
      class: 'bg-warning card',
      highlightClass: 'text-bold service bg-warning selected shadow-16',
      classMobile: 'bg-warning col-xs-10  expansion-space shadow-16'
    },
    {
      name: 'Bindery',
      subservices: [
        'Comb Binding',
        'Velo Binding',
        'Tape Binding',
        'Perfect Binding',
        'Saddle Stitching',
        'Numbering',
        'Folding',
        'Padding',
        'Laminating',
        'Cutting',
        'Shrink Wrapping',
        'Mounting',
        'Counting'
      ],
      id: 5,
      value: 'bindery',
      class: 'bg-secondary card',
      highlightClass: 'text-bold service bg-secondary selected shadow-16',
      classMobile: 'bg-secondary col-xs-10  expansion-space shadow-16'
    },
  ]
}
