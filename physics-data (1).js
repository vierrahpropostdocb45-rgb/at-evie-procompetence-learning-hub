/* ============================================================
   AT'EVIE PROCOMPETENCE LEARNING HUB
   PHYSICS DATA
   UGANDA LOWER SECONDARY CURRICULUM — S1 TO S4

   Based on the Uganda NCDC Lower Secondary Physics syllabus.

   IMPORTANT:
   This file defines:
       const physicsData

   The lesson page can therefore use:
       physicsData[selectedTopic]

   A normalised search function is also included so that
   small differences in spaces, capital letters and apostrophes
   do not produce "Topic Not Found".
   ============================================================ */


/* ============================================================
   PHYSICS TOPIC DATABASE
   ============================================================ */

const physicsData = {


/* ============================================================
   SENIOR ONE — S1
   ============================================================ */


/* ------------------------------------------------------------
   TOPIC 1
   ------------------------------------------------------------ */

"Introduction to Physics": {

    title: "Introduction to Physics",
    level: "Senior One (S1)",
    theme: "Introduction",
    topicNumber: 1,

    content: `

    <h2>🔬 Introduction to Physics</h2>

    <h3>Learning objectives</h3>

    <p>By the end of this topic, the learner should be able to:</p>

    <ul>
        <li>Explain the meaning of Physics.</li>
        <li>Identify major branches of Physics.</li>
        <li>Explain the importance of Physics.</li>
        <li>Identify applications of Physics in everyday life.</li>
        <li>Identify careers related to Physics.</li>
        <li>Explain the importance of laboratory safety.</li>
    </ul>

    <h3>Meaning of Physics</h3>

    <p>
    Physics is the branch of science that studies matter, energy,
    motion, forces, interactions and the physical processes that
    occur in nature.
    </p>

    <p>
    Physics helps us understand how and why things happen. It uses
    observation, measurement, experimentation, mathematical
    relationships and scientific models.
    </p>

    <h3>Major branches of Physics</h3>

    <ul>
        <li><strong>Mechanics:</strong> study of motion, forces and energy.</li>
        <li><strong>Heat and thermodynamics:</strong> study of heat, temperature and energy transfer.</li>
        <li><strong>Optics:</strong> study of light and its behaviour.</li>
        <li><strong>Acoustics:</strong> study of sound.</li>
        <li><strong>Electricity:</strong> study of electric charge, current and circuits.</li>
        <li><strong>Magnetism:</strong> study of magnets and magnetic effects.</li>
        <li><strong>Atomic physics:</strong> study of atoms.</li>
        <li><strong>Nuclear physics:</strong> study of atomic nuclei and nuclear processes.</li>
        <li><strong>Astronomy:</strong> study of objects and phenomena in space.</li>
    </ul>

    <h3>Importance of Physics</h3>

    <ul>
        <li>It explains natural phenomena.</li>
        <li>It provides a foundation for engineering.</li>
        <li>It supports medicine and medical technology.</li>
        <li>It contributes to electricity generation.</li>
        <li>It supports transport and communication.</li>
        <li>It contributes to agriculture.</li>
        <li>It supports construction and architecture.</li>
        <li>It contributes to environmental monitoring.</li>
        <li>It supports technological innovation.</li>
    </ul>

    <h3>Physics in everyday life</h3>

    <p>
    Physics is involved whenever a vehicle moves, a lamp produces
    light, water is heated, a mobile phone communicates, a mirror
    forms an image or an electrical appliance operates.
    </p>

    <h3>Physics careers</h3>

    <ul>
        <li>Physicist</li>
        <li>Engineer</li>
        <li>Medical physicist</li>
        <li>Electronics technician</li>
        <li>Surveyor</li>
        <li>Architect</li>
        <li>Telecommunications specialist</li>
        <li>Energy specialist</li>
        <li>Physics teacher</li>
    </ul>

    <h3>Laboratory safety</h3>

    <ul>
        <li>Follow instructions carefully.</li>
        <li>Use apparatus correctly.</li>
        <li>Keep the working area clean.</li>
        <li>Report damaged equipment.</li>
        <li>Use appropriate protective equipment.</li>
        <li>Do not taste laboratory substances.</li>
        <li>Do not carry out experiments without appropriate supervision.</li>
    </ul>

    <h3>Quick revision</h3>

    <ol>
        <li>Define Physics.</li>
        <li>Name five branches of Physics.</li>
        <li>State four applications of Physics.</li>
        <li>Name four Physics-related careers.</li>
        <li>State five laboratory safety rules.</li>
    </ol>

    `
},


/* ------------------------------------------------------------
   TOPIC 2
   ------------------------------------------------------------ */

"Measurements in Physics": {

    title: "Measurements in Physics",
    level: "Senior One (S1)",
    theme: "Mechanics and Properties of Matter",
    topicNumber: 2,

    content: `

    <h2>📏 Measurements in Physics</h2>

    <h3>Learning objectives</h3>

    <ul>
        <li>Explain measurement.</li>
        <li>Identify physical quantities.</li>
        <li>Use appropriate SI units.</li>
        <li>Select suitable measuring instruments.</li>
        <li>Measure length, area, volume, mass and time.</li>
        <li>Explain accuracy and errors.</li>
        <li>Use significant figures and scientific notation.</li>
        <li>Calculate density.</li>
    </ul>

    <h3>Meaning of measurement</h3>

    <p>
    Measurement is the process of comparing an unknown quantity with
    an accepted standard quantity.
    </p>

    <h3>Physical quantities and instruments</h3>

    <table>
        <tr>
            <th>Quantity</th>
            <th>SI unit</th>
            <th>Instrument</th>
        </tr>

        <tr>
            <td>Length</td>
            <td>metre (m)</td>
            <td>Ruler or metre rule</td>
        </tr>

        <tr>
            <td>Mass</td>
            <td>kilogram (kg)</td>
            <td>Balance</td>
        </tr>

        <tr>
            <td>Time</td>
            <td>second (s)</td>
            <td>Clock or stopwatch</td>
        </tr>

        <tr>
            <td>Temperature</td>
            <td>kelvin (K)</td>
            <td>Thermometer</td>
        </tr>

        <tr>
            <td>Electric current</td>
            <td>ampere (A)</td>
            <td>Ammeter</td>
        </tr>
    </table>

    <h3>Accuracy</h3>

    <p>
    Accuracy refers to how close a measured value is to the accepted
    or true value.
    </p>

    <h3>Sources of measurement error</h3>

    <ul>
        <li>Parallax error.</li>
        <li>Zero error.</li>
        <li>Incorrect reading of a scale.</li>
        <li>Unsuitable measuring instrument.</li>
        <li>Environmental changes.</li>
    </ul>

    <h3>Improving measurements</h3>

    <ul>
        <li>Choose a suitable instrument.</li>
        <li>Read scales at eye level.</li>
        <li>Check for zero error.</li>
        <li>Repeat measurements.</li>
        <li>Calculate average values where appropriate.</li>
        <li>Record results carefully.</li>
    </ul>

    <h3>Density</h3>

    <p>
    Density is the mass contained in a unit volume of a substance.
    </p>

    <p><strong>Density = Mass ÷ Volume</strong></p>

    <p><strong>ρ = m / V</strong></p>

    <h3>Worked example</h3>

    <p>
    A solid has a mass of 200 g and a volume of 50 cm³.
    </p>

    <p>
    Density = 200 ÷ 50
    </p>

    <p>
    <strong>Density = 4 g/cm³</strong>
    </p>

    <h3>Floating and sinking</h3>

    <p>
    An object tends to float when its average density is less than
    the density of the liquid. It tends to sink when its density is
    greater than that of the liquid.
    </p>

    <h3>Revision</h3>

    <ol>
        <li>Define measurement.</li>
        <li>State the SI unit of mass.</li>
        <li>What is parallax error?</li>
        <li>Define density.</li>
        <li>Calculate the density of a 500 g object occupying 100 cm³.</li>
    </ol>

    `
},


/* ------------------------------------------------------------
   TOPIC 3
   ------------------------------------------------------------ */

"States of matter": {

    title: "States of matter",
    level: "Senior One (S1)",
    theme: "Mechanics and Properties of Matter",
    topicNumber: 3,

    content: `

    <h2>🧊 States of Matter</h2>

    <h3>Meaning of matter</h3>

    <p>
    Matter is anything that has mass and occupies space.
    Matter is made of particles.
    </p>

    <h3>Particle theory</h3>

    <ul>
        <li>Matter is made of very small particles.</li>
        <li>The particles are continuously moving.</li>
        <li>There are spaces between particles.</li>
        <li>Particles attract one another.</li>
        <li>Heating generally increases particle motion.</li>
    </ul>

    <h3>States of matter</h3>

    <table>
        <tr>
            <th>State</th>
            <th>Arrangement</th>
            <th>Shape</th>
            <th>Volume</th>
        </tr>

        <tr>
            <td>Solid</td>
            <td>Closely packed</td>
            <td>Fixed</td>
            <td>Fixed</td>
        </tr>

        <tr>
            <td>Liquid</td>
            <td>Close together but mobile</td>
            <td>Not fixed</td>
            <td>Fixed</td>
        </tr>

        <tr>
            <td>Gas</td>
            <td>Far apart</td>
            <td>Not fixed</td>
            <td>Not fixed</td>
        </tr>

        <tr>
            <td>Plasma</td>
            <td>Charged particles</td>
            <td>Not fixed</td>
            <td>Not fixed</td>
        </tr>
    </table>

    <h3>Changes of state</h3>

    <ul>
        <li><strong>Melting:</strong> solid → liquid.</li>
        <li><strong>Freezing:</strong> liquid → solid.</li>
        <li><strong>Evaporation:</strong> liquid → gas.</li>
        <li><strong>Boiling:</strong> rapid vaporisation throughout a liquid.</li>
        <li><strong>Condensation:</strong> gas → liquid.</li>
        <li><strong>Sublimation:</strong> solid → gas directly.</li>
    </ul>

    <h3>Diffusion</h3>

    <p>
    Diffusion is the net movement of particles from a region of
    higher concentration to a region of lower concentration.
    </p>

    <h3>Brownian motion</h3>

    <p>
    Brownian motion is the random movement of small particles
    suspended in a fluid due to collisions with moving particles
    of the fluid.
    </p>

    <h3>Plasma</h3>

    <p>
    Plasma is an ionised state of matter containing charged particles.
    Examples include lightning and the outer atmosphere of stars.
    </p>

    <h3>Revision</h3>

    <ol>
        <li>Define matter.</li>
        <li>Describe the particle arrangement in solids, liquids and gases.</li>
        <li>Define diffusion.</li>
        <li>What is Brownian motion?</li>
        <li>What is plasma?</li>
    </ol>

    `
},


/* ------------------------------------------------------------
   TOPIC 4
   ------------------------------------------------------------ */

"Effects of forces": {

    title: "Effects of forces",
    level: "Senior One (S1)",
    theme: "Mechanics and Properties of Matter",
    topicNumber: 4,

    content: `

    <h2>💪 Effects of Forces</h2>

    <h3>Meaning of force</h3>

    <p>
    A force is a push or pull that can change the motion, direction
    or shape of an object.
    </p>

    <h3>Effects of force</h3>

    <ul>
        <li>Starting motion.</li>
        <li>Stopping motion.</li>
        <li>Changing speed.</li>
        <li>Changing direction.</li>
        <li>Changing shape.</li>
    </ul>

    <h3>Types of forces</h3>

    <ul>
        <li>Gravitational force.</li>
        <li>Frictional force.</li>
        <li>Magnetic force.</li>
        <li>Electrostatic force.</li>
        <li>Upthrust.</li>
        <li>Tension.</li>
        <li>Air resistance.</li>
    </ul>

    <h3>Mass and weight</h3>

    <p>
    Mass is the quantity of matter in an object. Weight is the
    gravitational force acting on an object.
    </p>

    <p><strong>W = mg</strong></p>

    <p>
    where W is weight in newtons, m is mass in kilograms and g is
    gravitational field strength.
    </p>

    <h3>Friction</h3>

    <p>
    Friction is a force that opposes relative motion between
    surfaces in contact.
    </p>

    <h3>Useful effects of friction</h3>

    <ul>
        <li>Walking.</li>
        <li>Writing.</li>
        <li>Braking.</li>
        <li>Holding objects.</li>
    </ul>

    <h3>Unwanted effects of friction</h3>

    <ul>
        <li>Wear and tear.</li>
        <li>Production of unwanted heat.</li>
        <li>Energy loss.</li>
        <li>Reduced machine efficiency.</li>
    </ul>

    <h3>Surface tension</h3>

    <p>
    Surface tension is the tendency of a liquid surface to behave
    like a stretched elastic surface.
    </p>

    <h3>Capillarity</h3>

    <p>
    Capillarity is the rise or fall of a liquid in a narrow tube
    due to adhesive and cohesive forces.
    </p>

    <h3>Revision</h3>

    <ol>
        <li>Define force.</li>
        <li>State five effects of force.</li>
        <li>Define friction.</li>
        <li>State two useful effects of friction.</li>
        <li>Calculate the weight of a 10 kg mass if g = 10 N/kg.</li>
    </ol>

    `
},


/* ------------------------------------------------------------
   TOPIC 5
   ------------------------------------------------------------ */

"Temperature measurements": {

    title: "Temperature measurements",
    level: "Senior One (S1)",
    theme: "Heat",
    topicNumber: 5,

    content: `

    <h2>🌡️ Temperature Measurements</h2>

    <h3>Temperature</h3>

    <p>
    Temperature is a measure related to the average kinetic energy
    of particles in a substance.
    </p>

    <h3>Heat and temperature</h3>

    <p>
    Heat is energy transferred because of a temperature difference.
    Temperature describes the thermal state of a body.
    </p>

    <h3>Thermometer</h3>

    <p>
    A thermometer is an instrument used to measure temperature.
    </p>

    <h3>Temperature scales</h3>

    <table>
        <tr>
            <th>Scale</th>
            <th>Description</th>
        </tr>

        <tr>
            <td>Celsius</td>
            <td>Uses degrees Celsius (°C).</td>
        </tr>

        <tr>
            <td>Kelvin</td>
            <td>SI absolute temperature scale.</td>
        </tr>

        <tr>
            <td>Fahrenheit</td>
            <td>Temperature scale used in some countries.</td>
        </tr>
    </table>

    <h3>Thermometric properties</h3>

    <p>
    A thermometric property is a physical property that changes
    predictably with temperature and can therefore be used to measure
    temperature.
    </p>

    <h3>Qualities of a good thermometric liquid</h3>

    <ul>
        <li>It should expand predictably.</li>
        <li>It should respond quickly to temperature changes.</li>
        <li>It should have a suitable temperature range.</li>
        <li>It should be easy to see or detect.</li>
    </ul>

    <h3>Daily atmospheric temperature</h3>

    <p>
    Atmospheric temperature changes during the day because the Earth
    receives and loses energy through radiation and heat transfer.
    Cloud cover, wind, humidity and surface conditions also influence
    temperature.
    </p>

    <h3>Revision</h3>

    <ol>
        <li>Define temperature.</li>
        <li>Distinguish heat from temperature.</li>
        <li>What is a thermometer?</li>
        <li>Name two temperature scales.</li>
        <li>State three qualities of a good thermometer.</li>
    </ol>

    `
},


/* ------------------------------------------------------------
   TOPIC 6
   ------------------------------------------------------------ */

"Heat transfer": {

    title: "Heat transfer",
    level: "Senior One (S1)",
    theme: "Heat",
    topicNumber: 6,

    content: `

    <h2>🔥 Heat Transfer</h2>

    <p>
    Heat energy is transferred from a region of higher temperature
    to a region of lower temperature.
    </p>

    <h3>Modes of heat transfer</h3>

    <h3>1. Conduction</h3>

    <p>
    Conduction is the transfer of thermal energy through a material
    without bulk movement of the material.
    </p>

    <p>
    Metals are generally good conductors of heat.
    </p>

    <h3>2. Convection</h3>

    <p>
    Convection is heat transfer through the bulk movement of a fluid.
    </p>

    <p>
    When a fluid is heated, it generally becomes less dense and
    rises while cooler, denser fluid sinks. This produces convection
    currents.
    </p>

    <h3>3. Radiation</h3>

    <p>
    Radiation is the transfer of thermal energy by electromagnetic
    waves. It does not require a material medium.
    </p>

    <h3>Applications</h3>

    <ul>
        <li>Metal cooking utensils use conduction.</li>
        <li>Ventilation involves convection.</li>
        <li>The Sun warms Earth mainly by radiation.</li>
        <li>Vacuum flasks reduce heat transfer.</li>
    </ul>

    <h3>Greenhouse effect</h3>

    <p>
    The greenhouse effect is the warming of Earth's surface and
    lower atmosphere due to the absorption and re-emission of
    infrared radiation by atmospheric gases.
    </p>

    <h3>Global warming</h3>

    <p>
    Global warming refers to the long-term increase in Earth's
    average surface temperature. Human activities that increase
    greenhouse gas concentrations can contribute to this warming.
    </p>

    <h3>Revision</h3>

    <ol>
        <li>Name the three modes of heat transfer.</li>
        <li>Explain conduction.</li>
        <li>Explain convection.</li>
        <li>Explain radiation.</li>
        <li>What is the greenhouse effect?</li>
    </ol>

    `
},


/* ------------------------------------------------------------
   TOPIC 7
   ------------------------------------------------------------ */

"Expansion of solids, liquids, and gases": {

    title: "Expansion of solids, liquids, and gases",
    level: "Senior One (S1)",
    theme: "Heat",
    topicNumber: 7,

    content: `

    <h2>📐 Expansion of Solids, Liquids, and Gases</h2>

    <h3>Thermal expansion</h3>

    <p>
    Thermal expansion is the increase in size of a substance when
    its temperature increases.
    </p>

    <p>
    Most substances expand when heated and contract when cooled.
    </p>

    <h3>Expansion of solids</h3>

    <p>
    Solids generally expand when heated because their particles
    vibrate more strongly and their average separation increases.
    </p>

    <h3>Expansion of liquids</h3>

    <p>
    Liquids generally expand more than solids for a similar
    temperature increase.
    </p>

    <h3>Expansion of gases</h3>

    <p>
    Gases can expand considerably when heated because their
    particles are widely separated.
    </p>

    <h3>Applications of expansion</h3>

    <ul>
        <li>Expansion gaps in bridges.</li>
        <li>Gaps between railway tracks.</li>
        <li>Thermometers.</li>
        <li>Expansion of tyres and balloons.</li>
        <li>Thermal switches.</li>
    </ul>

    <h3>Anomalous expansion of water</h3>

    <p>
    Water behaves unusually between 0°C and 4°C. Water has its
    maximum density at approximately 4°C. When water cools below
    4°C it expands rather than continuing to contract.
    </p>

    <h3>Importance of anomalous expansion</h3>

    <p>
    Because ice is less dense than liquid water, ice floats on water.
    This helps aquatic life survive in cold environments because
    surface ice can provide insulation.
    </p>

    <h3>Revision</h3>

    <ol>
        <li>Define thermal expansion.</li>
        <li>Explain expansion of solids.</li>
        <li>Give two applications of expansion.</li>
        <li>What is anomalous expansion of water?</li>
        <li>Why does ice float on water?</li>
    </ol>

    `
},


/* ------------------------------------------------------------
   TOPIC 8
   ------------------------------------------------------------ */

"Nature of light; reflection of light at plane surfaces": {

    title: "Nature of light; reflection of light at plane surfaces",
    level: "Senior One (S1)",
    theme: "Light",
    topicNumber: 8,

    content: `

    <h2>💡 Nature of Light and Reflection at Plane Surfaces</h2>

    <h3>Nature of light</h3>

    <p>
    Light is electromagnetic radiation that can be detected by the
    human eye.
    </p>

    <h3>Sources of light</h3>

    <ul>
        <li>Sun</li>
        <li>Stars</li>
        <li>Flames</li>
        <li>Electric lamps</li>
        <li>LEDs</li>
    </ul>

    <h3>Luminous and non-luminous objects</h3>

    <p>
    A luminous object produces its own light. A non-luminous object
    is seen because it reflects or scatters light from a source.
    </p>

    <h3>Reflection</h3>

    <p>
    Reflection is the bouncing back of light when it strikes a
    surface.
    </p>

    <h3>Laws of reflection</h3>

    <ol>
        <li>The incident ray, reflected ray and normal lie in the same plane.</li>
        <li>The angle of incidence equals the angle of reflection.</li>
    </ol>

    <p><strong>i = r</strong></p>

    <h3>Plane mirror image</h3>

    <ul>
        <li>Virtual.</li>
        <li>Upright.</li>
        <li>Same size as the object.</li>
        <li>Laterally inverted.</li>
        <li>Same distance behind the mirror as the object is in front.</li>
    </ul>

    <h3>Applications</h3>

    <ul>
        <li>Periscopes.</li>
        <li>Mirrors.</li>
        <li>Optical instruments.</li>
        <li>Decoration.</li>
    </ul>

    <h3>Revision</h3>

    <ol>
        <li>Define reflection.</li>
        <li>State the laws of reflection.</li>
        <li>What is lateral inversion?</li>
        <li>Describe the image formed by a plane mirror.</li>
    </ol>

    `
},



/* ============================================================
   SENIOR TWO — S2
   ============================================================ */


/* TOPIC 9 */

"Work, energy, and power": {

    title: "Work, energy, and power",
    level: "Senior Two (S2)",
    theme: "Mechanics and Properties of Matter",
    topicNumber: 9,

    content: `

    <h2>⚙️ Work, Energy, and Power</h2>

    <h3>Work</h3>

    <p>
    Mechanical work is done when a force causes displacement in
    the direction of the force.
    </p>

    <p><strong>W = Fd</strong></p>

    <p>
    Work is measured in joules (J).
    </p>

    <h3>Energy</h3>

    <p>
    Energy is the capacity to do work.
    </p>

    <h3>Forms of energy</h3>

    <ul>
        <li>Kinetic energy.</li>
        <li>Gravitational potential energy.</li>
        <li>Elastic potential energy.</li>
        <li>Thermal energy.</li>
        <li>Chemical energy.</li>
        <li>Electrical energy.</li>
        <li>Light energy.</li>
        <li>Sound energy.</li>
    </ul>

    <h3>Kinetic energy</h3>

    <p><strong>KE = ½mv²</strong></p>

    <h3>Gravitational potential energy</h3>

    <p><strong>GPE = mgh</strong></p>

    <h3>Power</h3>

    <p>
    Power is the rate at which work is done or energy is transferred.
    </p>

    <p><strong>P = W/t</strong></p>

    <p>
    The SI unit of power is the watt (W).
    </p>

    <h3>Conservation of energy</h3>

    <p>
    Energy cannot be created or destroyed. It can be transferred
    from one form to another.
    </p>

    <h3>Simple machines</h3>

    <p>
    Simple machines make tasks easier by changing the size or
    direction of a force.
    </p>

    <p>
    Examples include levers, pulleys, wheel and axle systems,
    inclined planes and screws.
    </p>

    <h3>Revision</h3>

    <ol>
        <li>Define work.</li>
        <li>Define energy.</li>
        <li>State the kinetic-energy formula.</li>
        <li>Define power.</li>
        <li>Explain the law of conservation of energy.</li>
    </ol>

    `
},


/* TOPIC 10 */

"Turning effect of forces, centre of gravity, and stability": {

    title: "Turning effect of forces, centre of gravity, and stability",
    level: "Senior Two (S2)",
    theme: "Mechanics and Properties of Matter",
    topicNumber: 10,

    content: `

    <h2>🔧 Turning Effect of Forces, Centre of Gravity, and Stability</h2>

    <h3>Moment of a force</h3>

    <p>
    The moment of a force about a point is the turning effect
    produced by the force.
    </p>

    <p>
    <strong>Moment = Force × perpendicular distance from pivot</strong>
    </p>

    <h3>Principle of moments</h3>

    <p>
    For a body in rotational equilibrium, the sum of clockwise
    moments about a point equals the sum of anticlockwise moments.
    </p>

    <h3>Centre of gravity</h3>

    <p>
    The centre of gravity is the point through which the resultant
    weight of a body may be considered to act.
    </p>

    <h3>Stability</h3>

    <p>
    Stability is the ability of an object to resist being overturned.
    </p>

    <h3>Factors affecting stability</h3>

    <ul>
        <li>Width of the base.</li>
        <li>Height of the centre of gravity.</li>
        <li>Position of the centre of gravity.</li>
    </ul>

    <h3>Types of equilibrium</h3>

    <ul>
        <li>Stable equilibrium.</li>
        <li>Unstable equilibrium.</li>
        <li>Neutral equilibrium.</li>
    </ul>

    <h3>Applications</h3>

    <ul>
        <li>Vehicle design.</li>
        <li>Building construction.</li>
        <li>Wheelbarrows.</li>
        <li>Door handles.</li>
        <li>Levers.</li>
    </ul>

    <h3>Revision</h3>

    <ol>
        <li>Define moment.</li>
        <li>State the principle of moments.</li>
        <li>Define centre of gravity.</li>
        <li>State two ways of increasing stability.</li>
    </ol>

    `
},


/* TOPIC 11 */

"Pressure in solids and fluids": {

    title: "Pressure in solids and fluids",
    level: "Senior Two (S2)",
    theme: "Mechanics and Properties of Matter",
    topicNumber: 11,

    content: `

    <h2>🧱 Pressure in Solids and Fluids</h2>

    <h3>Pressure</h3>

    <p>
    Pressure is force acting normally per unit area.
    </p>

    <p><strong>P = F/A</strong></p>

    <p>
    The SI unit of pressure is the pascal (Pa).
    </p>

    <h3>Pressure in liquids</h3>

    <p>
    Liquid pressure increases with depth. It also depends on the
    density of the liquid and gravitational field strength.
    </p>

    <p><strong>P = ρgh</strong></p>

    <h3>Atmospheric pressure</h3>

    <p>
    Atmospheric pressure is the pressure exerted by the weight of
    the Earth's atmosphere.
    </p>

    <h3>Applications</h3>

    <ul>
        <li>Dams are thicker near their bases.</li>
        <li>Water tanks experience greater pressure at greater depths.</li>
        <li>Hydraulic systems use pressure transmission.</li>
        <li>Sharp blades produce greater pressure because force acts over a small area.</li>
    </ul>

    <h3>Bernoulli effect</h3>

    <p>
    In suitable flowing-fluid conditions, regions where a fluid moves
    faster can have lower pressure. This principle has applications
    such as aerofoils and Bunsen burner jets.
    </p>

    <h3>Revision</h3>

    <ol>
        <li>Define pressure.</li>
        <li>State the SI unit of pressure.</li>
        <li>Write the formula for pressure in a liquid.</li>
        <li>Explain why liquid pressure increases with depth.</li>
        <li>State one application of the Bernoulli effect.</li>
    </ol>

    `
},


/* TOPIC 12 */

"Mechanical properties of Materials and Hooke’s law": {

    title: "Mechanical properties of Materials and Hooke’s law",
    level: "Senior Two (S2)",
    theme: "Mechanics and Properties of Matter",
    topicNumber: 12,

    content: `

    <h2>🪢 Mechanical Properties of Materials and Hooke’s Law</h2>

    <h3>Elasticity</h3>

    <p>
    Elasticity is the ability of a material to regain its original
    shape after the deforming force is removed, provided the elastic
    limit has not been exceeded.
    </p>

    <h3>Extension</h3>

    <p>
    Extension is the increase in length produced when a force is
    applied to an object such as a spring.
    </p>

    <h3>Hooke's law</h3>

    <p>
    Within the elastic limit, the extension of a spring is
    proportional to the applied force.
    </p>

    <p><strong>F = kx</strong></p>

    <p>
    where F is force, k is the spring constant and x is extension.
    </p>

    <h3>Elastic deformation</h3>

    <p>
    Elastic deformation disappears when the deforming force is removed,
    provided the elastic limit has not been exceeded.
    </p>

    <h3>Plastic deformation</h3>

    <p>
    Plastic deformation remains after the deforming force is removed.
    </p>

    <h3>Applications</h3>

    <ul>
        <li>Spring balances.</li>
        <li>Vehicle suspension.</li>
        <li>Shock absorbers.</li>
        <li>Mattresses.</li>
        <li>Mechanical devices.</li>
    </ul>

    <h3>Revision</h3>

    <ol>
        <li>Define elasticity.</li>
        <li>Define extension.</li>
        <li>State Hooke's law.</li>
        <li>Distinguish elastic and plastic deformation.</li>
    </ol>

    `
},


/* TOPIC 13 */

"Reflection of light by curved surfaces": {

    title: "Reflection of light by curved surfaces",
    level: "Senior Two (S2)",
    theme: "Light",
    topicNumber: 13,

    content: `

    <h2>🪞 Reflection of Light by Curved Surfaces</h2>

    <h3>Curved mirrors</h3>

    <p>
    Curved mirrors have reflecting surfaces that are part of a curved
    surface. The two main types are concave and convex mirrors.
    </p>

    <h3>Concave mirror</h3>

    <p>
    A concave mirror curves inward. It can converge parallel rays
    of light.
    </p>

    <h3>Convex mirror</h3>

    <p>
    A convex mirror curves outward. It causes parallel rays to diverge.
    </p>

    <h3>Important terms</h3>

    <ul>
        <li>Principal axis.</li>
        <li>Pole.</li>
        <li>Principal focus.</li>
        <li>Centre of curvature.</li>
        <li>Focal length.</li>
    </ul>

    <h3>Images formed by curved mirrors</h3>

    <p>
    Depending on the position of an object, a concave mirror can
    produce real or virtual images of different sizes. A convex
    mirror normally produces a virtual, upright and diminished image.
    </p>

    <h3>Applications</h3>

    <ul>
        <li>Vehicle mirrors.</li>
        <li>Security mirrors.</li>
        <li>Vehicle headlights.</li>
        <li>Reflectors.</li>
        <li>Optical instruments.</li>
    </ul>

    <h3>Revision</h3>

    <ol>
        <li>Distinguish concave and convex mirrors.</li>
        <li>Define principal focus.</li>
        <li>Define focal length.</li>
        <li>Give two applications of curved mirrors.</li>
    </ol>

    `
},


/* TOPIC 14 */

"Magnets and magnetic fields": {

    title: "Magnets and magnetic fields",
    level: "Senior Two (S2)",
    theme: "Magnetism",
    topicNumber: 14,

    content: `

    <h2>🧲 Magnets and Magnetic Fields</h2>

    <h3>Magnet</h3>

    <p>
    A magnet is an object or material that produces a magnetic field
    and can attract suitable magnetic materials.
    </p>

    <h3>Magnetic poles</h3>

    <p>
    Magnets have two poles: north and south.
    </p>

    <ul>
        <li>Like poles repel.</li>
        <li>Unlike poles attract.</li>
    </ul>

    <h3>Magnetic field</h3>

    <p>
    A magnetic field is the region around a magnet where magnetic
    forces can be detected.
    </p>

    <h3>Magnetic field lines</h3>

    <ul>
        <li>They indicate the direction of the magnetic field.</li>
        <li>They do not cross one another.</li>
        <li>Closer lines indicate a stronger field.</li>
    </ul>

    <h3>Magnetic materials</h3>

    <p>
    Iron and many steels are attracted strongly to magnets. Other
    materials have different magnetic properties.
    </p>

    <h3>Applications</h3>

    <ul>
        <li>Compasses.</li>
        <li>Electric motors.</li>
        <li>Generators.</li>
        <li>Loudspeakers.</li>
        <li>Magnetic separation.</li>
    </ul>

    <h3>Revision</h3>

    <ol>
        <li>Name the two magnetic poles.</li>
        <li>What happens when like poles meet?</li>
        <li>Define magnetic field.</li>
        <li>State three applications of magnets.</li>
    </ol>

    `
},


/* TOPIC 15 */

"Electrostatics": {

    title: "Electrostatics",
    level: "Senior Two (S2)",
    theme: "Electricity",
    topicNumber: 15,

    content: `

    <h2>⚡ Electrostatics</h2>

    <h3>Electric charge</h3>

    <p>
    Electric charge is a property of matter responsible for
    electrical attraction and repulsion.
    </p>

    <p>
    There are two types of electric charge:
    <strong>positive</strong> and <strong>negative</strong>.
    </p>

    <ul>
        <li>Like charges repel.</li>
        <li>Unlike charges attract.</li>
    </ul>

    <h3>Charging by friction</h3>

    <p>
    When suitable materials are rubbed together, electrons can be
    transferred from one material to another. The materials then
    acquire opposite net charges.
    </p>

    <h3>Charging by induction</h3>

    <p>
    Charging by induction occurs when the presence of a charged body
    causes charges in another conductor to redistribute without
    direct contact.
    </p>

    <h3>Conductors and insulators</h3>

    <p>
    Conductors allow electric charge to move relatively easily,
    while insulators strongly resist the movement of charge.
    </p>

    <h3>Applications</h3>

    <ul>
        <li>Photocopiers.</li>
        <li>Electrostatic painting.</li>
        <li>Dust removal systems.</li>
        <li>Lightning conductors.</li>
    </ul>

    <h3>Lightning safety</h3>

    <p>
    Lightning is a large electrical discharge associated with
    accumulated electric charge in thunderstorms. Lightning
    protection systems provide safer paths for electrical discharge.
    </p>

    <h3>Revision</h3>

    <ol>
        <li>Name the two types of electric charge.</li>
        <li>State the law of attraction and repulsion.</li>
        <li>Explain charging by friction.</li>
        <li>Distinguish a conductor from an insulator.</li>
    </ol>

    `
},


/* TOPIC 16 */

"The Solar System": {

    title: "The Solar System",
    level: "Senior Two (S2)",
    theme: "Earth and Space Physics",
    topicNumber: 16,

    content: `

    <h2>☀️ The Solar System</h2>

    <h3>What is the Solar System?</h3>

    <p>
    The Solar System consists of the Sun and objects that orbit it,
    including planets, moons, asteroids and comets.
    </p>

    <h3>The Sun</h3>

    <p>
    The Sun is a star at the centre of the Solar System. Its
    gravitational attraction plays a major role in keeping planets
    in orbit.
    </p>

    <h3>The planets</h3>

    <ol>
        <li>Mercury</li>
        <li>Venus</li>
        <li>Earth</li>
        <li>Mars</li>
        <li>Jupiter</li>
        <li>Saturn</li>
        <li>Uranus</li>
        <li>Neptune</li>
    </ol>

    <h3>Planet groups</h3>

    <p>
    Mercury, Venus, Earth and Mars are terrestrial planets.
    Jupiter and Saturn are gas giants. Uranus and Neptune are
    ice giants.
    </p>

    <h3>Earth's rotation</h3>

    <p>
    Earth rotates about its axis. This rotation is associated with
    the cycle of day and night.
    </p>

    <h3>Earth's revolution</h3>

    <p>
    Earth revolves around the Sun. Together with Earth's axial tilt,
    this movement contributes to seasonal changes.
    </p>

    <h3>The Moon</h3>

    <p>
    The Moon is Earth's natural satellite. Its changing appearance
    is explained by its position relative to the Earth and Sun.
    </p>

    <h3>Revision</h3>

    <ol>
        <li>Name the eight planets.</li>
        <li>Explain the role of gravity in the Solar System.</li>
        <li>Distinguish rotation from revolution.</li>
        <li>Explain day and night.</li>
    </ol>

    `
},



/* ============================================================
   SENIOR THREE — S3
   ============================================================ */


/* TOPIC 17 */

"Linear and non-linear motion": {

    title: "Linear and non-linear motion",
    level: "Senior Three (S3)",
    theme: "Mechanics and Properties of Matter",
    topicNumber: 17,

    content: `

    <h2>🏃 Linear and Non-linear Motion</h2>

    <h3>Motion</h3>

    <p>
    Motion is the change in position of an object with time relative
    to a chosen reference point.
    </p>

    <h3>Distance</h3>

    <p>
    Distance is the total length of the path travelled.
    It is a scalar quantity.
    </p>

    <h3>Displacement</h3>

    <p>
    Displacement is the change in position in a specified direction.
    It is a vector quantity.
    </p>

    <h3>Speed</h3>

    <p><strong>Speed = distance / time</strong></p>

    <h3>Acceleration</h3>

    <p>
    Acceleration is the rate of change of velocity.
    </p>

    <p><strong>a = (v - u) / t</strong></p>

    <h3>Equations of motion</h3>

    <ul>
        <li>v = u + at</li>
        <li>s = ut + ½at²</li>
        <li>v² = u² + 2as</li>
    </ul>

    <h3>Momentum</h3>

    <p><strong>p = mv</strong></p>

    <p>
    In an isolated system, total linear momentum is conserved.
    </p>

    <h3>Newton's laws</h3>

    <ul>
        <li>First law: an object remains at rest or in uniform motion unless acted upon by a resultant external force.</li>
        <li>Second law: resultant force is related to mass and acceleration by F = ma.</li>
        <li>Third law: interacting bodies exert equal and opposite forces on one another.</li>
    </ul>

    <h3>Linear and non-linear motion</h3>

    <p>
    Linear motion occurs along a straight path. Non-linear motion
    occurs along a curved or otherwise non-straight path.
    </p>

    <h3>Revision</h3>

    <ol>
        <li>Define displacement.</li>
        <li>Distinguish speed and velocity.</li>
        <li>Define acceleration.</li>
        <li>State Newton's three laws.</li>
        <li>Write the equation for momentum.</li>
    </ol>

    `
},


/* TOPIC 18 */

"Refraction, dispersion, and colour": {

    title: "Refraction, dispersion, and colour",
    level: "Senior Three (S3)",
    theme: "Light",
    topicNumber: 18,

    content: `

    <h2>🌈 Refraction, Dispersion, and Colour</h2>

    <h3>Refraction</h3>

    <p>
    Refraction is the change in direction of light as it passes
    obliquely from one transparent medium to another because its
    speed changes.
    </p>

    <h3>Examples</h3>

    <ul>
        <li>A stick appearing bent in water.</li>
        <li>Lenses forming images.</li>
        <li>Optical fibres.</li>
        <li>Prisms.</li>
    </ul>

    <h3>Refractive index</h3>

    <p><strong>n = c / v</strong></p>

    <p>
    where c is the speed of light in vacuum and v is its speed in
    the medium.
    </p>

    <h3>Total internal reflection</h3>

    <p>
    Total internal reflection can occur when light travels from a
    denser medium to a less dense medium and the angle of incidence
    is greater than the critical angle.
    </p>

    <h3>Dispersion</h3>

    <p>
    Dispersion is the separation of white light into its component
    colours because different wavelengths are refracted by different
    amounts.
    </p>

    <h3>Visible spectrum</h3>

    <p>
    The visible spectrum is commonly remembered as:
    red, orange, yellow, green, blue, indigo and violet.
    </p>

    <h3>Applications</h3>

    <ul>
        <li>Optical fibres.</li>
        <li>Periscopes.</li>
        <li>Prisms.</li>
        <li>Communication systems.</li>
        <li>Rainbows.</li>
    </ul>

    <h3>Revision</h3>

    <ol>
        <li>Define refraction.</li>
        <li>Define refractive index.</li>
        <li>What is total internal reflection?</li>
        <li>Define dispersion.</li>
        <li>Name the colours of the visible spectrum.</li>
    </ol>

    `
},


/* TOPIC 19 */

"Lenses and optical instruments": {

    title: "Lenses and optical instruments",
    level: "Senior Three (S3)",
    theme: "Light",
    topicNumber: 19,

    content: `

    <h2>🔍 Lenses and Optical Instruments</h2>

    <h3>Lens</h3>

    <p>
    A lens is a transparent optical device that refracts light and
    has one or more curved surfaces.
    </p>

    <h3>Convex lens</h3>

    <p>
    A convex lens is thicker at the centre and thinner at the edges.
    It converges parallel rays of light.
    </p>

    <h3>Concave lens</h3>

    <p>
    A concave lens is thinner at the centre and thicker at the edges.
    It diverges parallel rays.
    </p>

    <h3>Important terms</h3>

    <ul>
        <li>Principal axis.</li>
        <li>Optical centre.</li>
        <li>Principal focus.</li>
        <li>Focal length.</li>
    </ul>

    <h3>Image formation</h3>

    <p>
    A convex lens can form different types of images depending on
    the position of the object. A concave lens generally forms a
    virtual, upright and diminished image.
    </p>

    <h3>Optical instruments</h3>

    <ul>
        <li>Magnifying glass.</li>
        <li>Camera.</li>
        <li>Microscope.</li>
        <li>Telescope.</li>
        <li>Projector.</li>
        <li>Eyeglasses.</li>
    </ul>

    <h3>Revision</h3>

    <ol>
        <li>Distinguish convex and concave lenses.</li>
        <li>Define focal length.</li>
        <li>What is the optical centre?</li>
        <li>Name four optical instruments.</li>
    </ol>

    `
},


/* TOPIC 20 */

"General wave properties": {

    title: "General wave properties",
    level: "Senior Three (S3)",
    theme: "Waves",
    topicNumber: 20,

    content: `

    <h2>🌊 General Wave Properties</h2>

    <h3>Wave</h3>

    <p>
    A wave is a disturbance that transfers energy from one place to
    another without requiring bulk transfer of matter.
    </p>

    <h3>Wave quantities</h3>

    <ul>
        <li><strong>Amplitude:</strong> maximum displacement from equilibrium.</li>
        <li><strong>Wavelength:</strong> distance between corresponding points on successive waves.</li>
        <li><strong>Frequency:</strong> number of complete cycles per second.</li>
        <li><strong>Period:</strong> time taken for one complete cycle.</li>
    </ul>

    <h3>Wave equation</h3>

    <p><strong>v = fλ</strong></p>

    <h3>Types of waves</h3>

    <p>
    Transverse waves have vibrations perpendicular to the direction
    of propagation.
    </p>

    <p>
    Longitudinal waves have vibrations parallel to the direction
    of propagation.
    </p>

    <h3>Electromagnetic waves</h3>

    <p>
    Electromagnetic waves can travel through a vacuum and include
    radio waves, microwaves, infrared, visible light, ultraviolet,
    X-rays and gamma rays.
    </p>

    <h3>Wave behaviours</h3>

    <ul>
        <li>Reflection.</li>
        <li>Refraction.</li>
        <li>Diffraction.</li>
        <li>Interference.</li>
    </ul>

    <h3>Revision</h3>

    <ol>
        <li>Define wavelength.</li>
        <li>Define frequency.</li>
        <li>State the wave equation.</li>
        <li>Distinguish transverse and longitudinal waves.</li>
    </ol>

    `
},


/* TOPIC 21 */

"Sound waves": {

    title: "Sound waves",
    level: "Senior Three (S3)",
    theme: "Waves",
    topicNumber: 21,

    content: `

    <h2>🔊 Sound Waves</h2>

    <h3>Production of sound</h3>

    <p>
    Sound is produced by vibrating objects. It normally travels
    through a material medium as a mechanical wave.
    </p>

    <h3>Nature of sound</h3>

    <p>
    Sound in air is mainly a longitudinal wave consisting of
    compressions and rarefactions.
    </p>

    <h3>Characteristics of sound</h3>

    <ul>
        <li><strong>Pitch:</strong> mainly related to frequency.</li>
        <li><strong>Loudness:</strong> related to amplitude and intensity.</li>
        <li><strong>Timbre:</strong> helps distinguish sounds with different waveforms.</li>
    </ul>

    <h3>Transmission of sound</h3>

    <p>
    Sound requires a material medium and can travel through gases,
    liquids and solids. It cannot travel through a vacuum.
    </p>

    <h3>Echo</h3>

    <p>
    An echo is a reflected sound heard separately from the original
    sound when the time separation is sufficient.
    </p>

    <h3>Applications</h3>

    <ul>
        <li>Ultrasound imaging.</li>
        <li>Industrial testing.</li>
        <li>Echo sounding.</li>
        <li>Communication.</li>
    </ul>

    <h3>Revision</h3>

    <ol>
        <li>How is sound produced?</li>
        <li>Why does sound require a medium?</li>
        <li>Define pitch.</li>
        <li>Define loudness.</li>
        <li>What is an echo?</li>
    </ol>

    `
},


/* TOPIC 22 */

"Heat quantities and vapours": {

    title: "Heat quantities and vapours",
    level: "Senior Three (S3)",
    theme: "Heat",
    topicNumber: 22,

    content: `

    <h2>🔥 Heat Quantities and Vapours</h2>

    <h3>Heat capacity</h3>

    <p>
    Heat capacity is the amount of thermal energy required to raise
    the temperature of a body by one degree Celsius or one kelvin.
    </p>

    <h3>Specific heat capacity</h3>

    <p>
    Specific heat capacity is the energy required to raise the
    temperature of one kilogram of a substance by one kelvin.
    </p>

    <p><strong>Q = mcΔT</strong></p>

    <h3>Latent heat</h3>

    <p>
    Latent heat is energy transferred during a change of state
    without a change in temperature.
    </p>

    <p><strong>Q = mL</strong></p>

    <h3>Specific latent heat</h3>

    <p>
    Specific latent heat is the energy required to change the state
    of one kilogram of a substance without changing its temperature.
    </p>

    <h3>Melting and boiling</h3>

    <p>
    During melting or boiling, energy is supplied to change the
    arrangement and separation of particles rather than increasing
    their average kinetic energy.
    </p>

    <h3>Vapour</h3>

    <p>
    A vapour is the gaseous form of a substance that is normally
    liquid or solid at the given conditions.
    </p>

    <h3>Evaporation</h3>

    <p>
    Evaporation occurs at the surface of a liquid and can occur
    below the boiling point.
    </p>

    <h3>Cooling effect of evaporation</h3>

    <p>
    Higher-energy particles escape from the liquid during evaporation,
    reducing the average kinetic energy of the remaining particles.
    This produces cooling.
    </p>

    <h3>Applications</h3>

    <ul>
        <li>Refrigeration.</li>
        <li>Perspiration.</li>
        <li>Cooling systems.</li>
        <li>Pressure cookers.</li>
    </ul>

    <h3>Revision</h3>

    <ol>
        <li>Define specific heat capacity.</li>
        <li>Define specific latent heat.</li>
        <li>Write Q = mcΔT.</li>
        <li>Write Q = mL.</li>
        <li>Explain why evaporation causes cooling.</li>
    </ol>

    `
},


/* TOPIC 23 */

"Stars and galaxies": {

    title: "Stars and galaxies",
    level: "Senior Three (S3)",
    theme: "Earth and Space Physics",
    topicNumber: 23,

    content: `

    <h2>⭐ Stars and Galaxies</h2>

    <h3>Stars</h3>

    <p>
    A star is a huge, hot body of gas that produces energy through
    nuclear processes.
    </p>

    <h3>The Sun</h3>

    <p>
    The Sun is the star closest to Earth and is the major source of
    energy supporting life on Earth.
    </p>

    <h3>Colour and temperature</h3>

    <p>
    Stars have different colours associated with their surface
    temperatures. Their apparent brightness also depends on factors
    such as luminosity and distance.
    </p>

    <h3>Life cycle of stars</h3>

    <ol>
        <li>Nebula.</li>
        <li>Protostar.</li>
        <li>Main-sequence star.</li>
        <li>Later stages depend on the star's mass.</li>
    </ol>

    <h3>Possible final stages</h3>

    <ul>
        <li>White dwarf.</li>
        <li>Neutron star.</li>
        <li>Black hole.</li>
    </ul>

    <h3>Galaxies</h3>

    <p>
    A galaxy is a vast system containing stars, gas, dust and other
    astronomical objects held together mainly by gravity.
    </p>

    <p>
    Our Solar System is located in the Milky Way galaxy.
    </p>

    <h3>Revision</h3>

    <ol>
        <li>What is a star?</li>
        <li>Why is the Sun important to Earth?</li>
        <li>What is a galaxy?</li>
        <li>Name three possible final stages of stars.</li>
    </ol>

    `
},


/* TOPIC 24 */

"Satellites and communication": {

    title: "Satellites and communication",
    level: "Senior Three (S3)",
    theme: "Earth and Space Physics",
    topicNumber: 24,

    content: `

    <h2>🛰️ Satellites and Communication</h2>

    <h3>Satellite</h3>

    <p>
    A satellite is an object that moves in an orbit around another
    object because of gravitational attraction.
    </p>

    <h3>Natural satellites</h3>

    <p>
    The Moon is Earth's natural satellite.
    </p>

    <h3>Artificial satellites</h3>

    <p>
    Artificial satellites are human-made objects placed into orbit
    for particular purposes.
    </p>

    <h3>Uses of artificial satellites</h3>

    <ul>
        <li>Communication.</li>
        <li>Weather monitoring.</li>
        <li>Navigation.</li>
        <li>Earth observation.</li>
        <li>Scientific research.</li>
        <li>Remote sensing.</li>
    </ul>

    <h3>Geostationary satellites</h3>

    <p>
    A geostationary satellite has an orbital period matching Earth's
    rotation and, under suitable orbital conditions, appears nearly
    fixed above a particular point on the equator.
    </p>

    <h3>Satellite communication</h3>

    <p>
    Communication satellites receive signals from ground stations,
    process or relay them and transmit them to other locations.
    </p>

    <h3>Space exploration</h3>

    <p>
    Satellites and space missions provide information about Earth,
    other planets, stars and the wider universe.
    </p>

    <h3>Revision</h3>

    <ol>
        <li>Define a satellite.</li>
        <li>Distinguish natural and artificial satellites.</li>
        <li>State four uses of artificial satellites.</li>
        <li>What is a geostationary satellite?</li>
    </ol>

    `
},



/* ============================================================
   SENIOR FOUR — S4
   ============================================================ */


/* TOPIC 25 */

"Introduction to current electricity": {

    title: "Introduction to current electricity",
    level: "Senior Four (S4)",
    theme: "Electricity",
    topicNumber: 25,

    content: `

    <h2>⚡ Introduction to Current Electricity</h2>

    <h3>Electric current</h3>

    <p>
    Electric current is the rate of flow of electric charge through
    a conductor.
    </p>

    <p><strong>I = Q/t</strong></p>

    <p>
    The SI unit of current is the ampere (A).
    </p>

    <h3>Electric charge</h3>

    <p>
    Electric charge is measured in coulombs (C).
    </p>

    <h3>Sources of current</h3>

    <ul>
        <li>Cells.</li>
        <li>Batteries.</li>
        <li>Generators.</li>
        <li>Solar cells.</li>
    </ul>

    <h3>Electromotive force</h3>

    <p>
    Electromotive force, or e.m.f., is the energy supplied by a source
    per unit charge passing through the source.
    </p>

    <h3>Conductors and insulators</h3>

    <p>
    Conductors allow charge to move relatively easily. Insulators
    resist the movement of charge.
    </p>

    <h3>Series circuits</h3>

    <p>
    Components in a series circuit are connected along one path.
    The same current flows through each component.
    </p>

    <h3>Parallel circuits</h3>

    <p>
    Parallel circuits provide more than one path for current.
    Components connected in parallel can operate independently.
    </p>

    <h3>Circuit diagrams</h3>

    <p>
    Standard circuit symbols are used to represent cells, switches,
    lamps, resistors, ammeters and voltmeters.
    </p>

    <h3>Revision</h3>

    <ol>
        <li>Define electric current.</li>
        <li>State the SI unit of current.</li>
        <li>Define e.m.f.</li>
        <li>Distinguish series and parallel circuits.</li>
        <li>Name four sources of electrical energy.</li>
    </ol>

    `
},


/* TOPIC 26 */

"Voltage, resistance and Ohm’s law": {

    title: "Voltage, resistance and Ohm’s law",
    level: "Senior Four (S4)",
    theme: "Electricity",
    topicNumber: 26,

    content: `

    <h2>🔋 Voltage, Resistance and Ohm's Law</h2>

    <h3>Potential difference</h3>

    <p>
    Potential difference is the energy transferred per unit charge
    between two points in an electrical circuit.
    </p>

    <p><strong>V = W/Q</strong></p>

    <h3>Resistance</h3>

    <p>
    Resistance is the opposition offered by a component or material
    to the flow of electric current.
    </p>

    <p><strong>R = V/I</strong></p>

    <p>
    The SI unit of resistance is the ohm (Ω).
    </p>

    <h3>Ohm's law</h3>

    <p>
    For a conductor under constant physical conditions, the current
    is directly proportional to the potential difference across it.
    </p>

    <p><strong>V = IR</strong></p>

    <h3>Factors affecting resistance</h3>

    <ul>
        <li>Length of the conductor.</li>
        <li>Cross-sectional area.</li>
        <li>Material.</li>
        <li>Temperature.</li>
    </ul>

    <h3>Resistors in series</h3>

    <p>
    For resistors connected in series:
    </p>

    <p><strong>R<sub>T</sub> = R₁ + R₂ + R₃ + ...</strong></p>

    <h3>Resistors in parallel</h3>

    <p>
    For parallel resistors:
    </p>

    <p>
    <strong>1/R<sub>T</sub> = 1/R₁ + 1/R₂ + 1/R₃ + ...</strong>
    </p>

    <h3>Electronic components</h3>

    <ul>
        <li>Diodes.</li>
        <li>Transistors.</li>
        <li>Thermistors.</li>
        <li>Light-dependent resistors (LDRs).</li>
        <li>LEDs.</li>
        <li>Potentiometers.</li>
    </ul>

    <h3>Revision</h3>

    <ol>
        <li>Define potential difference.</li>
        <li>Define resistance.</li>
        <li>State Ohm's law.</li>
        <li>Write V = IR.</li>
        <li>Name four factors affecting resistance.</li>
    </ol>

    `
},


/* TOPIC 27 */

"Electric energy distribution and consumption": {

    title: "Electric energy distribution and consumption",
    level: "Senior Four (S4)",
    theme: "Electricity",
    topicNumber: 27,

    content: `

    <h2>🏠 Electric Energy Distribution and Consumption</h2>

    <h3>Electricity distribution</h3>

    <p>
    Electrical energy generated at a power station is transmitted
    through networks to substations and finally distributed to
    consumers.
    </p>

    <h3>Why high voltage is used</h3>

    <p>
    For a given power transfer, increasing voltage can reduce the
    current required. Lower current reduces energy losses in
    transmission lines.
    </p>

    <h3>Electrical power</h3>

    <p><strong>P = VI</strong></p>

    <p>
    Other useful forms include:
    </p>

    <p>
    <strong>P = I²R</strong>
    </p>

    <p>
    <strong>P = V²/R</strong>
    </p>

    <h3>Electrical energy</h3>

    <p><strong>E = Pt</strong></p>

    <p>
    Electrical energy used in homes is commonly measured in
    kilowatt-hours (kWh).
    </p>

    <h3>Domestic electricity</h3>

    <p>
    Domestic circuits normally use parallel connections so that
    individual appliances can operate independently.
    </p>

    <h3>Safety devices</h3>

    <ul>
        <li>Fuse.</li>
        <li>Circuit breaker.</li>
        <li>Earth connection.</li>
        <li>Insulation.</li>
    </ul>

    <h3>Energy conservation</h3>

    <ul>
        <li>Switch off unused appliances.</li>
        <li>Use energy-efficient appliances.</li>
        <li>Use appropriate lighting.</li>
        <li>Avoid unnecessary standby consumption.</li>
        <li>Maintain electrical equipment properly.</li>
    </ul>

    <h3>Electricity meter</h3>

    <p>
    A domestic electricity meter records the amount of electrical
    energy consumed by a household.
    </p>

    <h3>Revision</h3>

    <ol>
        <li>Explain why electricity is transmitted at high voltage.</li>
        <li>Write the formula for electrical power.</li>
        <li>Write the formula for electrical energy.</li>
        <li>Name four electrical safety devices or measures.</li>
        <li>State five ways of saving electrical energy.</li>
    </ol>

    `
},


/* TOPIC 28 */

"Electromagnetic effects": {

    title: "Electromagnetic effects",
    level: "Senior Four (S4)",
    theme: "Magnetism",
    topicNumber: 28,

    content: `

    <h2>🧲 Electromagnetic Effects</h2>

    <h3>Magnetic field around a current-carrying conductor</h3>

    <p>
    An electric current flowing through a conductor produces a
    magnetic field around the conductor.
    </p>

    <h3>Electromagnet</h3>

    <p>
    An electromagnet is a temporary magnet produced by passing
    current through a coil, usually around a suitable magnetic core.
    </p>

    <h3>Factors affecting electromagnet strength</h3>

    <ul>
        <li>Current through the coil.</li>
        <li>Number of turns of the coil.</li>
        <li>Nature of the core.</li>
    </ul>

    <h3>Applications of electromagnets</h3>

    <ul>
        <li>Electric bells.</li>
        <li>Relays.</li>
        <li>Electric motors.</li>
        <li>Loudspeakers.</li>
        <li>Telephone receivers.</li>
    </ul>

    <h3>Alternating and direct current</h3>

    <p>
    Direct current (d.c.) flows in one direction. Alternating current
    (a.c.) periodically changes direction.
    </p>

    <h3>Transformers</h3>

    <p>
    A transformer transfers electrical energy between coils through
    electromagnetic induction and is used to change a.c. voltage.
    </p>

    <h3>Step-up transformer</h3>

    <p>
    A step-up transformer increases voltage.
    </p>

    <h3>Step-down transformer</h3>

    <p>
    A step-down transformer decreases voltage.
    </p>

    <h3>Revision</h3>

    <ol>
        <li>What magnetic effect is produced by electric current?</li>
        <li>Define electromagnet.</li>
        <li>State three factors affecting electromagnet strength.</li>
        <li>Distinguish a.c. and d.c.</li>
        <li>What is the function of a transformer?</li>
    </ol>

    `
},


/* TOPIC 29 */

"Atomic models": {

    title: "Atomic models",
    level: "Senior Four (S4)",
    theme: "Modern Physics",
    topicNumber: 29,

    content: `

    <h2>⚛️ Atomic Models</h2>

    <h3>Structure of the atom</h3>

    <p>
    An atom consists of a small central nucleus containing protons
    and neutrons, surrounded by electrons.
    </p>

    <table>
        <tr>
            <th>Particle</th>
            <th>Charge</th>
            <th>Location</th>
        </tr>

        <tr>
            <td>Proton</td>
            <td>Positive</td>
            <td>Nucleus</td>
        </tr>

        <tr>
            <td>Neutron</td>
            <td>Neutral</td>
            <td>Nucleus</td>
        </tr>

        <tr>
            <td>Electron</td>
            <td>Negative</td>
            <td>Outside nucleus</td>
        </tr>
    </table>

    <h3>Dalton's model</h3>

    <p>
    Dalton described atoms as extremely small particles associated
    with elements.
    </p>

    <h3>Rutherford model</h3>

    <p>
    Rutherford's work provided evidence for a small, dense,
    positively charged nucleus and showed that most of the atom
    is empty space.
    </p>

    <h3>Atomic number</h3>

    <p>
    Atomic number is the number of protons in the nucleus of an atom.
    </p>

    <h3>Mass number</h3>

    <p>
    Mass number is the total number of protons and neutrons in the
    nucleus.
    </p>

    <h3>Isotopes</h3>

    <p>
    Isotopes are atoms of the same element with the same number of
    protons but different numbers of neutrons.
    </p>

    <h3>Thermionic emission</h3>

    <p>
    Thermionic emission is the release of electrons from a material
    when it is heated sufficiently.
    </p>

    <h3>Photoelectric effect</h3>

    <p>
    The photoelectric effect involves the emission of electrons from
    a material when suitable electromagnetic radiation falls on it.
    </p>

    <h3>Cathode rays and X-rays</h3>

    <p>
    Cathode rays consist of streams of electrons. X-rays are
    high-frequency electromagnetic radiation produced in suitable
    high-energy electron processes.
    </p>

    <h3>Revision</h3>

    <ol>
        <li>Name the three main subatomic particles.</li>
        <li>Define atomic number.</li>
        <li>Define mass number.</li>
        <li>What are isotopes?</li>
        <li>Explain thermionic emission.</li>
    </ol>

    `
},


/* TOPIC 30 */

"Nuclear processes": {

    title: "Nuclear processes",
    level: "Senior Four (S4)",
    theme: "Modern Physics",
    topicNumber: 30,

    content: `

    <h2>☢️ Nuclear Processes</h2>

    <h3>Nuclear processes</h3>

    <p>
    Nuclear processes involve changes in atomic nuclei and can
    release or absorb significant amounts of energy.
    </p>

    <h3>Radioactive decay</h3>

    <p>
    Radioactive decay is a spontaneous and random process in which
    an unstable nucleus changes into a more stable configuration.
    </p>

    <h3>Types of nuclear radiation</h3>

    <ul>
        <li><strong>Alpha:</strong> relatively massive and strongly ionising.</li>
        <li><strong>Beta:</strong> fast charged particles emitted from nuclei.</li>
        <li><strong>Gamma:</strong> high-energy electromagnetic radiation.</li>
    </ul>

    <h3>Half-life</h3>

    <p>
    Half-life is the time required for the number of undecayed
    radioactive nuclei, or the corresponding activity under suitable
    conditions, to fall to half its initial value.
    </p>

    <h3>Nuclear fission</h3>

    <p>
    Nuclear fission is the splitting of a heavy nucleus into smaller
    nuclei, usually accompanied by the release of energy and neutrons.
    </p>

    <h3>Nuclear fusion</h3>

    <p>
    Nuclear fusion is the joining of light nuclei to form a heavier
    nucleus, accompanied by a release of energy under suitable
    conditions.
    </p>

    <h3>Applications</h3>

    <ul>
        <li>Medical diagnosis and treatment.</li>
        <li>Industrial applications.</li>
        <li>Scientific research.</li>
        <li>Electricity generation.</li>
    </ul>

    <h3>Radiation safety</h3>

    <p>
    Exposure to ionising radiation should be controlled using
    appropriate professional safety procedures, including reducing
    unnecessary exposure and using suitable shielding.
    </p>

    <h3>Revision</h3>

    <ol>
        <li>Define radioactive decay.</li>
        <li>Name three types of nuclear radiation.</li>
        <li>Define half-life.</li>
        <li>Distinguish fission and fusion.</li>
        <li>State three applications of nuclear processes.</li>
    </ol>

    `
},


/* TOPIC 31 */

"Digital electronics": {

    title: "Digital electronics",
    level: "Senior Four (S4)",
    theme: "Modern Physics",
    topicNumber: 31,

    content: `

    <h2>💻 Digital Electronics</h2>

    <h3>Digital information</h3>

    <p>
    Digital systems represent information using discrete values.
    Binary digital systems commonly use the values 0 and 1.
    </p>

    <h3>Potential divider</h3>

    <p>
    A potential divider is a circuit arrangement that produces a
    selected potential difference from a supply voltage using
    resistive components.
    </p>

    <h3>Applications of potential dividers</h3>

    <ul>
        <li>Volume controls.</li>
        <li>Sensor circuits.</li>
        <li>Control systems.</li>
        <li>Electronic measuring systems.</li>
    </ul>

    <h3>Logic gates</h3>

    <p>
    A logic gate is an electronic circuit that performs a logical
    operation on one or more binary inputs to produce a binary output.
    </p>

    <h3>AND gate</h3>

    <p>
    An AND gate produces an output of 1 only when all required inputs
    are 1.
    </p>

    <h3>OR gate</h3>

    <p>
    An OR gate produces an output of 1 when at least one input is 1.
    </p>

    <h3>NOT gate</h3>

    <p>
    A NOT gate reverses the input.
    </p>

    <h3>NAND gate</h3>

    <p>
    A NAND gate is an AND operation followed by inversion.
    </p>

    <h3>NOR gate</h3>

    <p>
    A NOR gate is an OR operation followed by inversion.
    </p>

    <h3>Truth table — AND gate</h3>

    <table>
        <tr>
            <th>A</th>
            <th>B</th>
            <th>Output</th>
        </tr>

        <tr>
            <td>0</td>
            <td>0</td>
            <td>0</td>
        </tr>

        <tr>
            <td>0</td>
            <td>1</td>
            <td>0</td>
        </tr>

        <tr>
            <td>1</td>
            <td>0</td>
            <td>0</td>
        </tr>

        <tr>
            <td>1</td>
            <td>1</td>
            <td>1</td>
        </tr>
    </table>

    <h3>Bistable switches</h3>

    <p>
    A bistable circuit has two stable states and can be used to
    store one binary state.
    </p>

    <h3>Astable circuits</h3>

    <p>
    An astable circuit continually changes between states and can
    be used to generate repeating electronic signals.
    </p>

    <h3>Applications of digital electronics</h3>

    <ul>
        <li>Computers.</li>
        <li>Mobile phones.</li>
        <li>Digital cameras.</li>
        <li>Automatic control systems.</li>
        <li>Communication equipment.</li>
        <li>Electronic measuring instruments.</li>
    </ul>

    <h3>Revision</h3>

    <ol>
        <li>What is a digital signal?</li>
        <li>What digits are used in binary systems?</li>
        <li>What is a logic gate?</li>
        <li>State the function of an AND gate.</li>
        <li>What is a bistable circuit?</li>
        <li>Give four applications of digital electronics.</li>
    </ol>

    `
}

};



/* ============================================================
   TOPIC-NAME NORMALISATION
   ============================================================

   This is VERY IMPORTANT for your website.

   It prevents problems caused by:
   - capital letters
   - small letters
   - extra spaces
   - different apostrophe characters
   - accidental spaces around the topic name
   ============================================================ */

function normalisePhysicsTopicName(name) {

    if (!name) {
        return "";
    }

    return String(name)

        .trim()

        .toLowerCase()

        .replace(/[’‘`]/g, "'")

        .replace(/\s+/g, " ")

        .replace(/[.;:]+$/g, "");

}


/* ============================================================
   BUILD NORMALISED LOOKUP
   ============================================================ */

const physicsTopicLookup = {};

Object.keys(physicsData).forEach(function(topicName) {

    physicsTopicLookup[
        normalisePhysicsTopicName(topicName)
    ] = topicName;

});


/* ============================================================
   GET PHYSICS TOPIC
   ============================================================ */

function getPhysicsTopic(topicName) {

    if (!topicName) {
        return null;
    }

    /* First try exact match */

    if (physicsData[topicName]) {
        return physicsData[topicName];
    }


    /* Then try normalised match */

    const normalised =
        normalisePhysicsTopicName(topicName);

    const realTopicName =
        physicsTopicLookup[normalised];


    if (realTopicName) {
        return physicsData[realTopicName];
    }


    return null;
}


/* ============================================================
   TOPIC COUNT
   ============================================================ */

const physicsTopicCount =
    Object.keys(physicsData).length;


/* ============================================================
   CONSOLE INFORMATION
   ============================================================ */

console.log(
    "=============================================="
);

console.log(
    "AT'EVIE PROCOMPETENCE LEARNING HUB"
);

console.log(
    "Physics data loaded successfully."
);

console.log(
    "Total Physics topics:",
    physicsTopicCount
);

console.log(
    "Available Physics topics:",
    Object.keys(physicsData)
);

console.log(
    "=============================================="
);


/* ============================================================
   FINAL SAFETY CHECK
   ============================================================ */

if (physicsTopicCount !== 31) {

    console.error(
        "WARNING: Expected 31 Physics topics, but found:",
        physicsTopicCount
    );

} else {

    console.log(
        "✓ All 31 S1–S4 Physics topics are present."
    );

}