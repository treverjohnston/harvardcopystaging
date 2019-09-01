export default {
  cardServices: [
    {
      name: 'Print/Copy Services',
      icon: 'fa fa-paint-brush',
      class: 'col-xs-10 col-sm-4 col-md-5 bg-info text-white card',
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
      class: 'col-xs-10 col-sm-4 col-md-5 text-white card bg-secondary',
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
      class: 'bg-info card',
      highlightClass: 'text-bold service bg-info selected shadow-16',
      classMobile: 'bg-info col-xs-10  expansion-space shadow-16'
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
      class: 'bg-positive card',
      highlightClass: 'text-bold service bg-positive selected shadow-16',
      classMobile: 'bg-positive col-xs-10  expansion-space shadow-16'
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
