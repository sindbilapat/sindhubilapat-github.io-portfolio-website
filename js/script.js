// ============================
// Sindhu Bilapati — Portfolio
// ============================

document.addEventListener('DOMContentLoaded', () => {

  // ---------------------------------------------------------------
  // Mobile navigation
  // ---------------------------------------------------------------

  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
      });
    });
  }


  // ---------------------------------------------------------------
  // Scroll reveal
  // ---------------------------------------------------------------

  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  if (!prefersReducedMotion) {

    const revealEls =
      document.querySelectorAll('.reveal');

    const io =
      new IntersectionObserver(
        entries => {

          entries.forEach(entry => {

            if (entry.isIntersecting) {

              entry.target.classList.remove('pending');

              io.unobserve(entry.target);

            }

          });

        },
        {
          threshold: 0.12
        }
      );

    revealEls.forEach(el => {

      const rect =
        el.getBoundingClientRect();

      if (rect.top > window.innerHeight * 0.9) {

        el.classList.add('pending');

        io.observe(el);

      }

    });

  }


  // ---------------------------------------------------------------
  // Project data
  // ---------------------------------------------------------------

  const projects = {

    // PROJECT 1
    // Brachytherapy

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
        'Rebuilt and refined the cylinder design in SolidWorks and created four sizes based on feedback from the clinical team. Created technical drawings and completed dimensional checks before fabrication.',

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


    // PROJECT 2
    // SLA Fleet Upgrade

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
          caption: 'Form 4B and Form 3B prints compared side by side'
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
        'Compared the Form 4B/4BL with the Form 3B/3BL using similar builds, tracking print time and print outcomes. Summarized the results and presented them to AMU leadership with a proposed onboarding plan.',

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


    // PROJECT 3
    // Adaptive Bike Handle

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
          caption: 'Completed attachment with adjustable length and wrist socket'
        }

      ],

      objective:
        'A child with a below-elbow limb difference needed a custom bike handle attachment that could connect securely to the handlebar, allow comfortable wrist movement, and adjust as the child grows.',

      work:
        'Led the SolidWorks design and prototyping. Based on feedback from the child and family, added a ball-and-socket wrist joint, a screw-based length adjustment, and revised the handlebar connection before preparing the parts for fabrication.',

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


    // PROJECT 4
    // Modular Pediatric Hearing Aid

    p4: {

      tag: 'Senior Design, FSU',

      title: 'Modular Pediatric Hearing Aid',

      images: [

        {
          src: 'assets/images/p4-hearing-aid.jpg',
          fit: 'contain',
          caption: 'Pediatric earmold senior design project'
        }

      ],

      objective:
        'Develop a scalable pediatric earmold system for behind-the-ear hearing aids that can account for anatomical changes as a child grows.',

      work:
        'Using Materialise Mimics Innovation Suite to convert 3D optical ear scans into engineering models and apply a pediatric growth model to guide an adaptable earmold design. The project also considers FDA 510(k) Class II medical device requirements and ISO 10993 biocompatibility requirements.',

      outcome:
        'The project is ongoing, with current work focused on developing the digital modeling workflow and translating pediatric ear anatomy into a scalable design for prototyping.',

      tools: [
        'Materialise Mimics Innovation Suite',
        '3-matic',
        '3D optical scanning',
        '3D printing',
        'FDA 510(k)',
        'ISO 10993'
      ]

    },


    // PROJECT 5
    // Arterial + Venous Segmentation

    p5: {

      tag: 'Mayo Clinic',

      title: 'Arterial and Venous Segmentation Refinement',

      images: [

        {
          src: 'assets/images/p5-segmentation.png',
          fit: 'contain',
          caption: 'Segmented arterial and venous anatomy'
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
        'Reviewed and cleaned up the existing arterial segmentation in Materialise Mimics. Created a separate venous segmentation and compared thresholding and region-growing methods to isolate connected vessel anatomy.',

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


    // PROJECT 6
    // Pacemaker

    p6: {

      tag: 'Bioinstrumentation Class',

      title: 'Pacemaker Bioinstrumentation System',

      images: [

        {
          src: 'assets/images/p6-breadboard.jpg',
          fit: 'contain',
          caption: 'Breadboard build of the full circuit'
        },

        {
          src: 'assets/images/p6-diagram.png',
          fit: 'contain',
          caption: 'Block diagram of the detection and pacing circuit'
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
        'Rebuilt the ECG amplifier and QRS band-pass filter and tested the filter response before adding the remaining stages. Set the detection threshold with an LM311 comparator, built the monostable and astable 555 timer stages, and integrated the NAND gate and 4-bit counter. Tested and debugged each stage before testing the complete system.',

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


    // PROJECT 7
    // Amyloid Beta

    p7: {

      tag: 'Biotransport Class',

      title:
        'Transport of Amyloid-β Aggregates Through Brain Interstitial Fluid',

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
        "Built the transport model using Fick's first law and calculated diffusion coefficients with the Stokes–Einstein equation. Used the Péclet number to compare diffusive and convective transport and generated MATLAB plots showing how aggregate size affects diffusion.",

      outcome:
        'The model showed that diffusion was more effective for smaller amyloid-beta species, while larger aggregates depended more on bulk flow for transport. The work was accepted as a virtual poster at AAIC 2026.',

      tools: [
        'MATLAB',
        "Fick's first law",
        'Stokes–Einstein equation',
        'Péclet number analysis'
      ]

    },


    // PROJECT 8
    // Honors in the Major — Spiral Artery Blood Flow

    p8: {

      tag: 'Honors in the Major, FSU',

      title: 'Spiral Artery Blood Flow Modeling',

      images: [

        {
          src: 'assets/images/p8-poster.jpg',
          fit: 'contain',
          caption:
            'Spiral artery research presented at the Florida Undergraduate Research Conference'
        },

        {
          src: 'assets/images/p8-geometry.png',
          fit: 'contain',
          caption:
            'Parameterized spiral artery geometry generated in Python'
        }

      ],

      objective:
        'Investigate how uterine spiral artery geometry influences red blood cell distribution and local hemodynamics.',

      work:
        'I generate spiral artery geometries in Python and prepare them for simulation in OpenFOAM using a modified suspension-balance blood-flow model. My current work focuses on adapting the model to curved periodic vessels and resolving flow instability before comparing different geometries.',

      outcome:
        'A spiral vessel mesh has been developed that passes OpenFOAM mesh checks and can run with the customized solver without external flow forcing. The next phase will compare red blood cell distribution and hemodynamic behavior across vessel geometries.',

      tools: [
        'Python',
        'OpenFOAM',
        'Gmsh',
        'Computational fluid dynamics',
        'Suspension-balance modeling'
      ]

    },


    // PROJECT 9
    // High Plank

    p9: {

      tag: 'Biomechanics Class',

      title:
        'Hand Placement and Joint Loading During a Static High Plank',

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
        'Ran the plank trials and collected motion-capture data with OpenCap. Helped interpret the OpenSim inverse-dynamics results and performed the statistical comparison across the three hand positions.',

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


    // PROJECT 10
    // Knee Model

    p10: {

      tag: 'FSU College of Medicine',

      title: 'Knee Ligament Teaching Model',

      images: [

        {
          src: 'assets/images/p10-model.png',
          fit: 'contain',
          caption:
            'Completed model with the ACL and PCL reconstructed'
        },

        {
          src: 'assets/images/p10-segmentation.jpg',
          fit: 'contain',
          caption:
            'Segmenting the femur, tibia, and fibula in 3D Slicer'
        }

      ],

      objective:
        'Build an educational knee model that clearly shows how the ACL and PCL cross relative to the femur, tibia, and fibula.',

      work:
        "Segmented the femur, tibia, and fibula from a CT dataset in 3D Slicer. Manually reconstructed the ACL and PCL because ligament imaging wasn't available, then positioned them to show the crossing anatomy clearly.",

      outcome:
        'Completed an initial digital model showing the femur, tibia, fibula, ACL, and PCL and uploaded it to Sketchfab for review.',

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

  const overlay =
    document.getElementById('modal-overlay');

  const galleryMain =
    document.getElementById('gallery-main');

  const galleryCaption =
    document.getElementById('gallery-caption');

  const galleryThumbs =
    document.getElementById('gallery-thumbs');

  const galleryPrev =
    document.getElementById('gallery-prev');

  const galleryNext =
    document.getElementById('gallery-next');

  const modalTag =
    document.getElementById('modal-tag');

  const modalTitle =
    document.getElementById('modal-title');

  const modalObjective =
    document.getElementById('modal-objective');

  const modalWork =
    document.getElementById('modal-work');

  const modalOutcome =
    document.getElementById('modal-outcome');

  const modalTools =
    document.getElementById('modal-tools');

  let currentImages = [];

  let currentIndex = 0;


  function renderImage() {

    const img =
      currentImages[currentIndex];

    galleryMain.src =
      img.src;

    galleryMain.alt =
      img.caption || '';

    galleryMain.style.objectFit =
      'contain';

    galleryMain.style.objectPosition =
      'center';

    galleryMain.classList.add(
      'is-contain'
    );

    galleryCaption.textContent =
      img.caption || '';

    galleryCaption.hidden =
      !img.caption;

    galleryThumbs
      .querySelectorAll('.thumb')
      .forEach((thumb, index) => {

        thumb.classList.toggle(
          'active',
          index === currentIndex
        );

      });


    const multipleImages =
      currentImages.length > 1;

    galleryPrev.hidden =
      !multipleImages;

    galleryNext.hidden =
      !multipleImages;

    galleryThumbs.hidden =
      !multipleImages;

  }


  function openModal(id) {

    const project =
      projects[id];

    if (!project) {
      return;
    }

    currentImages =
      project.images;

    currentIndex = 0;

    modalTag.textContent =
      project.tag;

    modalTitle.textContent =
      project.title;

    modalObjective.textContent =
      project.objective;

    modalWork.textContent =
      project.work;

    modalOutcome.textContent =
      project.outcome;

    modalTools.innerHTML =
      '';


    project.tools.forEach(tool => {

      const pill =
        document.createElement('span');

      pill.className =
        'tool-pill';

      pill.textContent =
        tool;

      modalTools.appendChild(
        pill
      );

    });


    galleryThumbs.innerHTML =
      '';


    project.images.forEach(
      (image, index) => {

        const button =
          document.createElement('button');

        button.className =
          'thumb';

        button.type =
          'button';

        button.setAttribute(
          'aria-label',
          `Show image ${index + 1}`
        );

        const thumbnail =
          document.createElement('img');

        thumbnail.src =
          image.src;

        thumbnail.alt =
          '';

        thumbnail.style.objectFit =
          'contain';

        thumbnail.style.objectPosition =
          'center';

        button.appendChild(
          thumbnail
        );

        button.addEventListener(
          'click',
          () => {

            currentIndex =
              index;

            renderImage();

          }
        );

        galleryThumbs.appendChild(
          button
        );

      }
    );


    renderImage();

    overlay.classList.add(
      'open'
    );

    document.body.style.overflow =
      'hidden';

  }


  function closeModal() {

    overlay.classList.remove(
      'open'
    );

    document.body.style.overflow =
      '';

  }


  function step(delta) {

    if (currentImages.length < 2) {
      return;
    }

    currentIndex =
      (
        currentIndex
        + delta
        + currentImages.length
      )
      % currentImages.length;

    renderImage();

  }


  // ---------------------------------------------------------------
  // Connect each card to project
  // ---------------------------------------------------------------

  document
    .querySelectorAll(
      '.project-grid .card[data-project]'
    )
    .forEach(card => {

      card.addEventListener(
        'click',
        () => {

          const projectId =
            card.dataset.project;

          openModal(
            projectId
          );

        }
      );

    });


  document
    .getElementById('modal-close')
    .addEventListener(
      'click',
      closeModal
    );


  overlay.addEventListener(
    'click',
    event => {

      if (event.target === overlay) {
        closeModal();
      }

    }
  );


  galleryPrev.addEventListener(
    'click',
    () => step(-1)
  );


  galleryNext.addEventListener(
    'click',
    () => step(1)
  );


  document.addEventListener(
    'keydown',
    event => {

      if (
        !overlay.classList.contains('open')
      ) {
        return;
      }

      if (event.key === 'Escape') {
        closeModal();
      }

      if (event.key === 'ArrowLeft') {
        step(-1);
      }

      if (event.key === 'ArrowRight') {
        step(1);
      }

    }
  );


  // ---------------------------------------------------------------
  // Project filtering
  // ---------------------------------------------------------------

  const filterBtns =
    document.querySelectorAll(
      '.filter-btn'
    );

  const cards =
    document.querySelectorAll(
      '.project-grid .card'
    );


  filterBtns.forEach(button => {

    button.addEventListener(
      'click',
      () => {

        filterBtns.forEach(btn => {

          btn.classList.remove(
            'active'
          );

        });

        button.classList.add(
          'active'
        );

        const filter =
          button.dataset.filter;

        cards.forEach(card => {

          const category =
            card.dataset.category;

          if (
            filter === 'all'
            || category === filter
          ) {

            card.style.display =
              '';

          } else {

            card.style.display =
              'none';

          }

        });

      }
    );

  });

});