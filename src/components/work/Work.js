import React, { useEffect } from 'react';

import Isotope from 'isotope-layout';

import './Work.css';
import { Link } from 'react-router-dom';

function Work() {
    useEffect(() => {
        let grid = document.querySelector('#portfolio-grid');
        let iso = new Isotope(grid, {
            itemSelector: '.item',
            isFitWidth: true,
        });

        document.querySelectorAll('#filters a').forEach((element) => {
            element.addEventListener('click', function(e) {
                e.preventDefault();

                var filterValue = element.attributes['data-filter'].textContent;
                iso.arrange({
                    filter: filterValue,
                });

                document.querySelector('#filters a.active').classList.remove('active');
                element.classList.add('active');
            });

            iso.arrange({
                filter: '*',
            });
        });

        // SetTimeout để hoạt động chính xác, nếu không hàm .arrange sẽ không chạy
        setTimeout(() => {
            iso.arrange({
                filter: '*',
            });
            setTimeout(() => {
                iso.arrange({
                    filter: '*',
                });
                setTimeout(() => {
                    iso.arrange({
                        filter: '*',
                    });
                }, 300);
            }, 300);
        }, 300);
    });

    return (
        <section className="Work container">
            <div className="row mb-5 align-items-center">
                <div className="col-md-12 col-lg-6 mb-4 mb-lg-0" data-aos="fade-up">
                    <h2>Hey, I'm Johan Stanworth</h2>
                    <p className="mb-0">Freelance Creative &amp; Professional Graphics Designer</p>
                </div>
                <div className="col-md-12 col-lg-6 text-left text-lg-right" data-aos="fade-up" data-aos-delay="100">
                    <div id="filters" className="filters">
                        <Link data-filter="*" className="active">
                            All
                        </Link>
                        <Link data-filter=".web">Web</Link>
                        <Link data-filter=".design">Design</Link>
                        <Link data-filter=".branding">Branding</Link>
                        <Link data-filter=".photography">Photography</Link>
                    </div>
                </div>
            </div>

            <div id="portfolio-grid" className="row no-gutter" data-aos="fade-up" data-aos-delay="200">
                <div className="item web col-sm-6 col-md-4 col-lg-4 mb-4">
                    <a href="work-single.html" className="item-wrap fancybox">
                        <div className="work-info">
                            <h3>Boxed Water</h3>
                            <span>Web</span>
                        </div>
                        <img className="img-fluid" src="/images/img_1.jpg" alt="" />
                    </a>
                </div>
                <div className="item photography col-sm-6 col-md-4 col-lg-4 mb-4">
                    <a href="work-single.html" className="item-wrap fancybox">
                        <div className="work-info">
                            <h3>Build Indoo</h3>
                            <span>Photography</span>
                        </div>
                        <img className="img-fluid" src="/images/img_2.jpg" alt="" />
                    </a>
                </div>
                <div className="item branding col-sm-6 col-md-4 col-lg-4 mb-4">
                    <a href="work-single.html" className="item-wrap fancybox">
                        <div className="work-info">
                            <h3>Cocooil</h3>
                            <span>Branding</span>
                        </div>
                        <img className="img-fluid" src="/images/img_3.jpg" alt="" />
                    </a>
                </div>
                <div className="item design col-sm-6 col-md-4 col-lg-4 mb-4">
                    <a href="work-single.html" className="item-wrap fancybox">
                        <div className="work-info">
                            <h3>Nike Shoe</h3>
                            <span>Design</span>
                        </div>
                        <img className="img-fluid" src="/images/img_4.jpg" alt="" />
                    </a>
                </div>
                <div className="item photography col-sm-6 col-md-4 col-lg-4 mb-4">
                    <a href="work-single.html" className="item-wrap fancybox">
                        <div className="work-info">
                            <h3>Kitchen Sink</h3>
                            <span>Photography</span>
                        </div>
                        <img className="img-fluid" src="/images/img_5.jpg" alt="" />
                    </a>
                </div>
                <div className="item branding col-sm-6 col-md-4 col-lg-4 mb-4">
                    <a href="work-single.html" className="item-wrap fancybox">
                        <div className="work-info">
                            <h3>Amazon</h3>
                            <span>brandingn</span>
                        </div>
                        <img className="img-fluid" src="/images/img_6.jpg" alt="" />
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Work;
