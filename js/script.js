// ============================
// Sindhu Bilapati — Portfolio
// ============================

document.addEventListener('DOMContentLoaded', () => {

  // Mobile nav toggle
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () =>
      navLinks.classList.toggle('open')
    );

    navLinks.querySelectorAll('a').forEach(a =>
      a.addEventListener('click', () =>
        navLinks.classList.remove('open')
      )
    );
  }


  // ---------------------------------------------------------------
  // Scroll reveal
  // ---------------------------------------------------------------

  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  if (!prefersReducedMotion) {

    const revealEls = document.querySelectorAll('.reveal');

    const io = new IntersectionObserver((entries) => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {
          entry.target.classList.remove('pending');
          io.unobserve(entry.target);
        }

      });

    }, {
      threshold: 0.12
    });


    revealEls.forEach(el => {

      const rect = el.getBoundingClientRect();

      if (rect.top > window.innerHeight * 0.9) {
        el.classList.add('pending');
        io.observe(el);
      }

    });

  }


  // ---------------------------------------------------------------
  // Project data
  //
  // All project images use "contain" so the full image remains visible.
  // ---------------------------------------------------------------

  const projects = {


    // =============================================================
    // PROJECT 1
    // =============================================================

    p1: {

      tag: 'Mayo Clinic',

      title: 'Brachytherapy CT Simulation Device',

      images: [

        {
          src: 'assets/images/p1-final.jpg',
          fit: 'contain',
          caption: 'Final SLA-printed cylinders, four sizes'
        },

        {
          src: 'assets/images/p1-orientation.png',
          fit: 'contain',
          caption: 'SolidWorks model of the cylinder'
        },

        {
          src: 'assets/images/p1-fabrication.jpg',
          fit: 'contain',
          caption: 'Printed parts packaged for the clinical team'
        }

      ],

      objective:
        "Mayo Clinic's Anatomic Modeling Unit needed a single-use, 3D-printed vaginal cylinder that reproduces the geometry of the reusable brachytherapy treatment device for use during CT simulation.",

      work:
        'I rebuilt and refined the cylinder design in SolidWorks and created four sizes based on feedback from the clinical team. I also created technical drawings and completed dimensional checks before fabrication.',

      outcome:
        'The technical drawings were approved, and the design moved into fabrication and in-person evaluation with the clinical team.',

      tools: [
        'SolidWorks',
        'Formlabs Form 4BL',
        'SLA printing',
        'Technical drawings',
        'Dimensional inspection'
      ]

    },


    // =============================================================
    // PROJECT 2
    // =============================================================

    p2: {

      tag: 'Mayo Clinic',

      title: 'SLA Fleet Upgrade Onboarding and Validation',

      images: [

        {
          src: 'assets/images/p2-holding.jpg',
          fit: 'contain',
          caption: 'Holding a Form 4B print during the evaluation'
        },

        {
          src: 'assets/images/p2-comparison.jpg',
          fit: 'contain',
          caption: 'Form 4B (left) and Form 3B (right) prints compared side by side'
        },

        {
          src: 'assets/images/p2-report.png',
          fit: 'contain',
          caption: 'Evaluation report prepared for AMU leadership'
        }

      ],

      objective:
        'Evaluate whether the Form 4B and Form 4BL could improve production in the Anatomic Modeling Unit compared with the existing Form 3B/3BL fleet.',

      work:
        'I compared the Form 4B/4BL with the Form 3B/3BL using similar builds, tracking print time and print outcomes. I summarized the results and presented them to AMU leadership with a proposed onboarding plan.',

      outcome:
        'For an equivalent build, estimated print time dropped from over 24 hours on the Form 3B to about 7 hours on the Form 4B. AMU production data also showed roughly 2.5x higher throughput on the Form 4B than the average Form 3B. The results were presented to AMU leadership and supported the decision to onboard the Form 4 platform for production.',

      tools: [
        'Formlabs Form 3B/3BL',
        'Formlabs Form 4B/4BL',
        'PreForm',
        'Print comparison',
        'Production data analysis'
      ]

    },


    // =============================================================
    // PROJECT 3
    // =============================================================

    p3: {

      tag: 'GRiP',

      title: 'Adaptive Bike Handle Attachment',

      images: [

        {
          src: 'assets/images/p3-cad.png',
          fit: 'contain',
          caption: 'SolidWorks model of the handlebar clamp and wrist socket'
        },

        {
          src: 'assets/images/p3-device.jpg',
          fit: 'contain',
          caption: 'Completed attachment, with the adjustable length and wrist socket marked'
        }

      ],

      objective:
        'A child with a below-elbow limb difference needed a custom bike handle attachment that could connect securely to the handlebar, allow comfortable wrist movement, and adjust as the child grows.',

      work:
        'I led the SolidWorks design and prototyping. Based on feedback from the child and family, I added a ball-and-socket wrist joint, a screw-based length adjustment, and revised the handlebar connection before preparing the parts for fabrication.',

      outcome:
        'The completed device was delivered, and the child rode their bike for the first time using the attachment.',

      tools: [
        'SolidWorks',
        'FDM 3D printing',
        'Ball-and-socket joint design',
        'Adjustable-length mechanism',
        'Iterative prototyping'
      ]

    },


    // =============================================================
    // PROJECT 4
    // =============================================================

    p4: {

      tag: 'Undergraduate Research, FSU',

      title: 'Blood Coagulation Modeling with Capillary Strips',

      images: [

        {
          src: 'assets/images/p4-strips.jpg',
          fit: 'contain',
          caption: 'Capillary strips loaded with blood samples for penetration testing'
        },

        {
          src: 'assets/images/p4-holder.png',
          fit: 'contain',
          caption: 'SolidWorks model of the strip holder'
        },

        {
          src: 'assets/images/p4-strip-cad.png',
          fit: 'contain',
          caption: 'SolidWorks model of the capillary strip'
        }

      ],

      objective:
        'Test whether blood penetration distance on a capillary strip could reflect changes in coagulation status after heparin treatment and protamine reversal.',

      work:
        'I developed the capillary-strip testing setup and worked on making the protocol more consistent by standardizing sample volume and timing. I measured penetration distance over time and organized the measurements for comparison across conditions.',

      outcome:
        'The project produced preliminary measurements, but there was not enough evidence to conclude that penetration distance consistently tracked coagulation status.',

      tools: [
        'SolidWorks',
        'Prusa CORE One',
        'FDM 3D printing',
        'Experimental testing',
        'Image analysis'
      ]

    },


    // =============================================================
    // PROJECT 5
    // =============================================================

    p5: {

      tag: 'Mayo Clinic',

      title: 'Arterial and Venous Segmentation Refinement',

      images: [
  {
    src: 'assets/images/p5-segmentation.png',
    fit: 'contain',
    caption: 'Segmented arterial (red) and venous (blue) anatomy'
  },

  {
    src: 'assets/images/p5-print.jpg',
    fit: 'contain',
    caption: 'Upper-extremity model printed on the Stratasys J850'
  }
],

      objective:
        'Support development of a proof-of-concept simulator for vein and radial artery harvesting in coronary artery bypass grafting using an upper-extremity CT scan.',

      work:
        'I reviewed and cleaned up the existing arterial segmentation in Materialise Mimics. I then created a separate venous segmentation and compared thresholding and region-growing methods to isolate connected vessel anatomy.',

      outcome:
        'The arterial and venous segmentations were incorporated into a physical upper-extremity model printed on the Stratasys J850 for continued development of the CABG simulation concept.',

      tools: [
        'Materialise Mimics',
        '3-matic',
        'CT imaging',
        'Stratasys J850',
        'Thresholding',
        'Region growing'
      ]

    },


    // =============================================================
    // PROJECT 6
    // =============================================================

    p6: {

      tag: 'Bioinstrumentation Class',

      title: 'Pacemaker Bioinstrumentation System',

      images: [

        {
          src: 'assets/images/p6-diagram.png',
          fit: 'contain',
          caption: 'Block diagram of the detection and pacing circuit'
        },

        {
          src: 'assets/images/p6-breadboard.jpg',
          fit: 'contain',
          caption: 'Breadboard build of the full circuit'
        },

        {
          src: 'assets/images/p6-scope.png',
          fit: 'contain',
          caption: 'Oscilloscope trace showing the P, QRS, and T waves'
        }

      ],

      objective:
        "Build a circuit that detects the QRS signal from an ECG and triggers a timed pacing pulse when a heartbeat isn't detected. This was a bioinstrumentation class project, not a clinically functional device.",

      work:
        'I rebuilt the ECG amplifier and QRS band-pass filter and tested the filter response before adding the remaining stages. I set the detection threshold with an LM311 comparator, built the monostable and astable 555 timer stages, and integrated the NAND gate and 4-bit counter. I tested and debugged each stage before testing the complete system.',

      outcome:
        'The completed circuit responded differently depending on whether the simulated heartbeat was present. The QRS signal reset the counter and blocked the pacing output; when the heartbeat was removed, the counter reached its limit and produced the intended output at the LED.',

      tools: [
        'KiCad',
        'Oscilloscope',
        'LM311 comparator',
        '555 timers',
        'NAND gate',
        '4-bit counter'
      ]

    },


    // =============================================================
    // PROJECT 7
    // =============================================================

    p7: {

      tag: 'Biotransport Class',

      title: 'Transport of Amyloid-β Aggregates Through Brain Interstitial Fluid',

      images: [

        {
          src: 'assets/images/p7-poster.png',
          fit: 'contain',
          caption: 'Poster accepted for AAIC 2026'
        },

        {
          src: 'assets/images/p7-diagram.png',
          fit: 'contain',
          caption: 'Diagram of monomer diffusion vs. bulk flow transport'
        },

        {
          src: 'assets/images/p7-graphs.png',
          fit: 'contain',
          caption: 'Diffusion coefficient and Péclet number vs. aggregate radius'
        }

      ],

      objective:
        'Model how amyloid-beta aggregate size affects the balance between diffusion and bulk fluid flow during transport through brain interstitial fluid.',

      work:
        "I built the transport model using Fick's first law and calculated diffusion coefficients with the Stokes–Einstein equation. I used the Péclet number to compare diffusive and convective transport and generated MATLAB plots showing how aggregate size affects diffusion.",

      outcome:
        'The model showed that diffusion was more effective for smaller amyloid-beta species, while larger aggregates depended more on bulk flow for transport. The work was accepted as a virtual poster at AAIC 2026.',

      tools: [
        'MATLAB',
        "Fick's first law",
        'Stokes–Einstein equation',
        'Péclet number analysis'
      ]

    },


    // =============================================================
    // PROJECT 8
    // =============================================================

    p8: {

      tag: 'Undergraduate Research, FSU',

      title: 'Spiral Arteries Orchestrating Menstrual Flow',

      images: [

        {
          src: 'assets/images/p8-schematic.png',
          fit: 'contain',
          caption: 'Uterine arterial system schematic and electrical-circuit analogy used for the resistance model'
        },

        {
          src: 'assets/images/p8-geometry.png',
          fit: 'contain',
          caption: 'Parameterized spiral geometry and generated helix coordinates from the Python model'
        },

        {
          src: 'assets/images/p8-channel.png',
          fit: 'contain',
          caption: 'CAD concept for a microfluidic test channel'
        },

        {
          src: 'assets/images/p8-poster.jpg',
          fit: 'contain',
          caption: 'Presenting the research at the Florida Undergraduate Research Conference'
        }

      ],

      objective:
        'Model how spiral artery geometry affects menstrual blood flow and test whether uterine contraction and vasoconstriction alone could reduce flow enough to control bleeding.',

      work:
        'I built a parameterized 2D spiral artery model and varied vessel diameter, coil pitch, and artery length. I used the Hagen–Poiseuille and Darcy–Weisbach equations to calculate flow resistance, then used Python to compare the results across conditions.',

      outcome:
        'The model suggested that contraction and vasoconstriction alone may not reduce flow enough to control bleeding. I presented the project at the Florida Undergraduate Research Conference.',

      tools: [
        'Python',
        'CAD modeling',
        'Hagen–Poiseuille equation',
        'Darcy–Weisbach equation'
      ]

    },


    // =============================================================
    // PROJECT 9
    // =============================================================

    p9: {

      tag: 'Biomechanics Class',

      title: 'Hand Placement and Joint Loading During a Static High Plank',

      images: [

        {
          src: 'assets/images/p9-chart.png',
          fit: 'contain',
          caption: 'Mean joint moments by hand-placement condition'
        },

        {
          src: 'assets/images/p9-table.png',
          fit: 'contain',
          caption: 'Statistical results across the three conditions'
        }

      ],

      objective:
        'Determine how narrow, standard, and wide hand placement affects shoulder and elbow loading during a static high plank.',

      work:
        'I ran the plank trials and collected motion-capture data with OpenCap. I also helped interpret the OpenSim inverse-dynamics results and ran the statistical comparison across the three hand positions.',

      outcome:
        'Wider hand placement reduced shoulder flexion loading but increased loading at the right elbow. Most joint moments changed significantly across positions, showing that hand placement redistributed the load rather than reducing it overall.',

      tools: [
        'OpenCap',
        'OpenSim',
        'Motion capture',
        'Inverse dynamics',
        'Statistical analysis'
      ]

    },


    // =============================================================
    // PROJECT 10
    // =============================================================

    p10: {

      tag: 'FSU College of Medicine',

      title: 'Knee Ligament Teaching Model',

      images: [

        {
          src: 'assets/images/p10-segmentation.jpg',
          fit: 'contain',
          caption: 'Segmenting the femur, tibia, and fibula in 3D Slicer'
        },

        {
          src: 'assets/images/p10-model.png',
          fit: 'contain',
          caption: 'Completed model with the ACL (blue) and PCL (green) reconstructed'
        }

      ],

      objective:
        'Build an educational knee model that clearly shows how the ACL and PCL cross relative to the femur, tibia, and fibula.',

      work:
        "I segmented the femur, tibia, and fibula from a CT dataset in 3D Slicer. Ligament imaging wasn't available, so I manually reconstructed the ACL and PCL and positioned them to show the crossing anatomy clearly.",

      outcome:
        'I completed an initial digital model showing the femur, tibia, fibula, ACL, and PCL and uploaded it to Sketchfab for review.',

      tools: [
        '3D Slicer',
        'CT segmentation',
        'Manual ligament reconstruction',
        'Sketchfab'
      ]

    }

  };


  // ---------------------------------------------------------------
  // Modal + gallery
  // ---------------------------------------------------------------

  const overlay = document.getElementById('modal-overlay');
  const galleryMain = document.getElementById('gallery-main');
  const galleryCaption = document.getElementById('gallery-caption');
  const galleryThumbs = document.getElementById('gallery-thumbs');
  const galleryPrev = document.getElementById('gallery-prev');
  const galleryNext = document.getElementById('gallery-next');

  const modalTag = document.getElementById('modal-tag');
  const modalTitle = document.getElementById('modal-title');
  const modalObjective = document.getElementById('modal-objective');
  const modalWork = document.getElementById('modal-work');
  const modalOutcome = document.getElementById('modal-outcome');
  const modalTools = document.getElementById('modal-tools');


  let currentImages = [];
  let currentIndex = 0;


  function renderImage() {

    const img = currentImages[currentIndex];

    galleryMain.src = img.src;
    galleryMain.alt = img.caption || '';

    // Keep every gallery image fully visible.
    galleryMain.style.objectFit = 'contain';
    galleryMain.style.objectPosition = 'center';

    galleryMain.classList.add('is-contain');

    galleryCaption.textContent = img.caption || '';
    galleryCaption.hidden = !img.caption;


    galleryThumbs.querySelectorAll('.thumb').forEach((t, i) => {
      t.classList.toggle('active', i === currentIndex);
    });


    const multi = currentImages.length > 1;

    galleryPrev.hidden = !multi;
    galleryNext.hidden = !multi;
    galleryThumbs.hidden = !multi;

  }


  function openModal(id) {

    const p = projects[id];

    if (!p) return;


    currentImages = p.images;

    currentIndex = 0;


    modalTag.textContent = p.tag;

    modalTitle.textContent = p.title;

    modalObjective.textContent = p.objective;

    modalWork.textContent = p.work;

    modalOutcome.textContent = p.outcome;


    modalTools.innerHTML = '';


    p.tools.forEach(t => {

      const pill = document.createElement('span');

      pill.className = 'tool-pill';

      pill.textContent = t;

      modalTools.appendChild(pill);

    });


    galleryThumbs.innerHTML = '';


    p.images.forEach((img, i) => {

      const b = document.createElement('button');

      b.className = 'thumb';

      b.type = 'button';

      b.setAttribute(
        'aria-label',
        `Show image ${i + 1}`
      );


      const t = document.createElement('img');

      t.src = img.src;

      t.alt = '';

      t.style.objectFit = 'contain';

      t.style.objectPosition = 'center';


      b.appendChild(t);


      b.addEventListener('click', () => {

        currentIndex = i;

        renderImage();

      });


      galleryThumbs.appendChild(b);

    });


    renderImage();

    overlay.classList.add('open');

    document.body.style.overflow = 'hidden';

  }


  function closeModal() {

    overlay.classList.remove('open');

    document.body.style.overflow = '';

  }


  function step(delta) {

    if (currentImages.length < 2) return;


    currentIndex =
      (currentIndex + delta + currentImages.length)
      % currentImages.length;


    renderImage();

  }


  document
    .querySelectorAll('[data-project]')
    .forEach(card => {

      card.addEventListener('click', () => {

        openModal(
          card.getAttribute('data-project')
        );

      });

    });


  document
    .getElementById('modal-close')
    .addEventListener('click', closeModal);


  overlay.addEventListener('click', e => {

    if (e.target === overlay) {
      closeModal();
    }

  });


  galleryPrev.addEventListener(
    'click',
    () => step(-1)
  );


  galleryNext.addEventListener(
    'click',
    () => step(1)
  );


  document.addEventListener('keydown', e => {

    if (!overlay.classList.contains('open')) {
      return;
    }


    if (e.key === 'Escape') {
      closeModal();
    }


    if (e.key === 'ArrowLeft') {
      step(-1);
    }


    if (e.key === 'ArrowRight') {
      step(1);
    }

  });


  // ---------------------------------------------------------------
  // Filter bar
  // ---------------------------------------------------------------

  const filterBtns =
    document.querySelectorAll('.filter-btn');

  const cards =
    document.querySelectorAll('.project-grid .card');


  filterBtns.forEach(btn => {

    btn.addEventListener('click', () => {

      filterBtns.forEach(b =>
        b.classList.remove('active')
      );


      btn.classList.add('active');


      const filter =
        btn.getAttribute('data-filter');


      cards.forEach(card => {

        const cat =
          card.getAttribute('data-category');


        card.style.display =
          (
            filter === 'all'
            || cat === filter
          )
            ? ''
            : 'none';

      });

    });

  });

});
