import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const SizeGuide = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, []);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>DRF SHOPS | Size Guide</title>
      </Helmet>
      <div className="flex w-full bg-white">
        <div className="container mx-auto w-[80%]">
          <div className="text-sm breadcrumbs pt-10 text-[rgba(0,0,0,.8)]">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>Size Guide</li>
            </ul>
          </div>
          <div className="flex w-full pt-10">
            <div className="container mx-auto flex justify-center flex-col text-center">
              <div className="divider">SIZE GUIDE</div>
            </div>
          </div>
          <div className="py-8 w-full">
            <p className="text-[14px] text-[rgba(0,0,0,0.7)] font-ProximaMedium">
              You can refer to the charts when selecting sizes but please note
              that sizes cannot be guaranteed and might vary slightly between
              brands.
            </p>
            <h2 className="text-[14px] uppercase font-ProximaBold py-5">
              Clothing Size
            </h2>
            <p className="text-[14px] text-[rgba(0,0,0,0.7)] font-ProximaMedium pb-5">
              We use standard Australian sizes. Please refer to the conversion
              table below as a guide.
            </p>
            <table className="table border border-dashed py-10">
              <thead>
                <tr>
                  <th>Size (AUS)</th>
                  <th>Bust (cm)</th>
                  <th>Waist (cm)</th>
                  <th>Hips (cm)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="">
                  <td className="">4/XXS</td>
                  <td className="">76</td>
                  <td>58</td>
                  <td>86</td>
                </tr>
                <tr className="">
                  <td className="">6/XS</td>
                  <td className="">81</td>
                  <td>63</td>
                  <td>91</td>
                </tr>
                <tr className="">
                  <td className="">8/S</td>
                  <td className="">86</td>
                  <td>68</td>
                  <td>96</td>
                </tr>
                <tr className="">
                  <td className="">10/M</td>
                  <td className="">91</td>
                  <td>73</td>
                  <td>101</td>
                </tr>
                <tr className="">
                  <td className="">12/L</td>
                  <td className="">96</td>
                  <td>78</td>
                  <td>106</td>
                </tr>
                <tr className="">
                  <td className="">14/XL</td>
                  <td className="">101</td>
                  <td>83</td>
                  <td>111</td>
                </tr>
              </tbody>
            </table>
            <h2 className="text-[14px] uppercase font-ProximaBold py-5">
              Size conversion
            </h2>
            <table className="table border border-dashed">
              <tbody>
                <tr className="">
                  <th></th>
                  <td className="">XXS</td>
                  <td className="">XS</td>
                  <td className="">S</td>
                  <td className="">M</td>
                  <td className="">L</td>
                  <td className="">XL</td>
                </tr>
                <tr className="">
                  <th>
                    <span className="small--hide">Australia</span>
                    <span className="medium-up--hide">AU</span>
                  </th>
                  <td className="">4</td>
                  <td className="">6</td>
                  <td className="">8</td>
                  <td className="">10</td>
                  <td className="">12</td>
                  <td className="">14</td>
                </tr>
                <tr className="">
                  <th>US</th>
                  <td className="">0</td>
                  <td className="">2</td>
                  <td className="">4</td>
                  <td className="">6</td>
                  <td className="">8</td>
                  <td className="">10</td>
                </tr>
                <tr className="">
                  <th>UK</th>
                  <td className="">4</td>
                  <td className="">6</td>
                  <td className="">8</td>
                  <td className="">10</td>
                  <td className="">12</td>
                  <td className="">14</td>
                </tr>
                <tr>
                  <th>
                    <span className="small--hide">European</span>
                    <span className="medium-up--hide">EU</span>
                  </th>
                  <td className="">32</td>
                  <td className="">34</td>
                  <td className="">36</td>
                  <td className="">38</td>
                  <td className="">40</td>
                  <td className="">42</td>
                </tr>
              </tbody>
            </table>
            <h2 className="text-[14px] uppercase font-ProximaBold py-5">
              Shoe size
            </h2>
            <table className="table border border-dashed">
              <thead>
                <tr>
                  <th>US Size</th>
                  <th>AUS Size</th>
                  <th>UK Size</th>
                  <th>EU Size</th>
                </tr>
              </thead>
              <tbody>
                <tr className="">
                  <td className="">4</td>
                  <td>4</td>
                  <td>2</td>
                  <td>35</td>
                </tr>
                <tr>
                  <td className="">5</td>
                  <td>5</td>
                  <td>3</td>
                  <td>36</td>
                </tr>
                <tr>
                  <td className="">6</td>
                  <td>6</td>
                  <td>4</td>
                  <td>37</td>
                </tr>
                <tr>
                  <td className="">7</td>
                  <td>7</td>
                  <td>5</td>
                  <td>38</td>
                </tr>
                <tr>
                  <td className="">8</td>
                  <td>8</td>
                  <td>6</td>
                  <td>39</td>
                </tr>
                <tr>
                  <td className="">9</td>
                  <td>9</td>
                  <td>7</td>
                  <td>40</td>
                </tr>
                <tr>
                  <td className="">10</td>
                  <td>10</td>
                  <td>8</td>
                  <td>41</td>
                </tr>
                <tr>
                  <td className="">11</td>
                  <td>11</td>
                  <td>9</td>
                  <td>42</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default SizeGuide;
