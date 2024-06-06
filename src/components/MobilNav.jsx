const MobilNav = () => {
  return (
    <nav className="mobil" aria-label="Mobile Navigation">
      <ul className="mobil__ul">
        <li className="mobil__ul-li sub-menu">
          <a href="/" target="_self">
            Home
          </a>
        </li>
        <li className="mobil__ul-li sub-menu">
          <a href="/about/">About Us</a>
          <ul className="multilevel-linkul-0">
            <li>
              <a href="/about/why_we_exist/">Why We Exist</a>
            </li>
            <li>
              <a href="/about/who_we_are/">Who We Are</a>
              <ul className="multilevel-linkul-1">
                <li>
                  <a href="/about/who_we_are/our_staff/">Our Staff</a>
                </li>
                <li>
                  <a href="/about/who_we_are/our_steering_committee/">
                    Our Steering Committee
                  </a>
                </li>
                <li>
                  <a href="/about/who_we_are/our_partners/">Our Partners</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/about/how_we_work/">How We Work</a>
              <ul className="multilevel-linkul-1">
                <li>
                  <a href="/about/how_we_work/common_agenda/">Common Agenda</a>
                </li>
                <li>
                  <a href="/about/how_we_work/our_structure/">Our Structure</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/about/our_impact/">Our Impact</a>
              <ul className="multilevel-linkul-1">
                <li>
                  <a href="/about/our_impact/learning_and_evaluation/">
                    Learning and Evaluation
                  </a>
                </li>
                <li>
                  <a href="/about/our_impact/baseline_data/">Baseline Data</a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="mobil__ul-li sub-menu">
          <a href="/working_groups/">Working Groups</a>
          <ul className="multilevel-linkul-0">
            <li>
              <a href="/working_groups/healthy_homes_healthy_children/">
                Healthy Homes, Healthy Children
              </a>
              <ul className="multilevel-linkul-1">
                <li>
                  <a href="/working_groups/healthy_homes_healthy_children/pathway_through_pregnancy/">
                    Pathway Through Pregnancy
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/working_groups/thriving_families/">Thriving Families</a>
              <ul className="multilevel-linkul-1">
                <li>
                  <a href="/working_groups/thriving_families/ready_region_family_councils/">
                    Ready Region Family Councils
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/working_groups/community_connections/">
                Community Connections
              </a>
            </li>
            <li>
              <a href="/working_groups/early_learning_and_development/">
                Early Learning and Development
              </a>
            </li>
            <li>
              <a href="/working_groups/data_and_knowledge_sharing/">
                Data and Knowledge Sharing
              </a>
            </li>
            <li>
              <a href="/working_groups/policy_and_advocacy/">
                Policy and Advocacy
              </a>
            </li>
          </ul>
        </li>
        <li className="mobil__ul-li sub-menu">
          <a href="/resources/">Resources</a>
          <ul className="multilevel-linkul-0">
            <li>
              <a
                href="https://planningcouncil.myresourcedirectory.com/"
                target="_blank"
                rel="noreferrer"
              >
                Resources757
              </a>
            </li>
            <li>
              <a href="/resources/parenting_resources/">Parenting Resources</a>
              <ul className="multilevel-linkul-1">
                <li>
                  <a
                    href="https://www.sleeptighthamptonroads.org/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Sleep Tight
                  </a>
                </li>
                <li>
                  <a href="/resources/parenting_resources/home-visiting/">
                    Support for Parenting and Pregnant Families in Hampton Roads
                  </a>
                </li>
                <li>
                  <a href="/resources/parenting_resources/support_groups/">
                    Support Groups
                  </a>
                </li>
                <li>
                  <a href="/resources/parenting_resources/parent_education_/">
                    Parent Education{' '}
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/working_groups/healthy_homes_healthy_children/pathway_through_pregnancy/">
                Pathway Through Pregnancy: Hampton Roads
              </a>
            </li>
            <li>
              <a href="/resources/the_basics_hampton_roads/">
                The Basics Hampton Roads
              </a>
            </li>
            <li>
              <a href="/resources/training_lists/">
                Professional Development Training
              </a>
            </li>
            <li>
              <a href="/resources/family_friendly_businesses/">
                Family-Friendly Businesses
              </a>
            </li>
            <li>
              <a href="/resources/ready_region_southeastern/">
                Ready Region Southeastern
              </a>
              <ul className="multilevel-linkul-1">
                <li>
                  <a href="/resources/ready_region_southeastern/about_ready_regions/">
                    About Ready Regions
                  </a>
                </li>
                <li>
                  <a href="/resources/ready_region_southeastern/about_vqb5/">
                    About VQB5
                  </a>
                </li>
                <li>
                  <a href="/resources/ready_region_southeastern/about_ready_region_southeastern/">
                    About Ready Region Southeastern
                  </a>
                </li>
                <li>
                  <a href="/resources/ready_region_southeastern/director_or_family_day_home_providers/">
                    Director or Family Day Home Providers
                  </a>
                </li>
                <li>
                  <a href="/resources/ready_region_southeastern/teachers/">
                    Teachers
                  </a>
                </li>
                <li>
                  <a href="/resources/ready_region_southeastern/className_observer/">
                    className Observer
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/resources/ready_set_register/">
                Ready, Set, Register Southeastern
              </a>
              <ul className="multilevel-linkul-1">
                <li>
                  <a href="/resources/ready_set_register/preschool/">
                    Infant, Toddler and Preschool Programs
                  </a>
                </li>
                <li>
                  <a href="/resources/ready_set_register/kindergarten_registration/">
                    Kindergarten Registration
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/resources/news/">News</a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  )
}
export default MobilNav
