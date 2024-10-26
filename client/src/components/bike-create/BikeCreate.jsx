import React from 'react';
import styles from './BikeCreate.module.css';

const manufacturers = [
    'Access Motor', 'Adly', 'Aeon', 'AGM MOTORS', 'Aixam', 'American Ironhorse', 'Aprilia',
    'Arctic Cat', 'Baotian', 'Barossa', 'Bashan', 'Beeline', 'Benelli', 'Beta', 'Big Dog Motorcycles',
    'Bimota', 'Black Tea', 'Blata', 'BMW', 'Bombardier', 'Boom', 'Brixton', 'Brough Superior', 'BRP',
    'BSA', 'Buell', 'Burelli', 'Cagiva', 'Can Am', 'Cectek', 'CFMOTO', 'CPI', 'Daelim', 'Derbi', 'Dinli',
    'DKW', 'DREEMS', 'Ducati', 'e-max', 'emco', 'Energica', 'e-Schwalbe', 'E-Ton', 'evmoto', 'Explorer',
    'Fantic', 'FB Mondial', 'Felo Moto', 'Futura', 'Gasgas', 'Generic', 'GG Motorradtechnik', 'Gilera',
    'GOES', 'Gorilla', 'Govecs', 'Harley-Davidson', 'Heinkel', 'Hercules', 'Herkules', 'Honda', 'Horex',
    'Horwin', 'Husaberg', 'Husqvarna', 'Hyosung', 'Indian', 'Italjet', 'Jawa', 'Jinling', 'Kawasaki',
    'KAYO', 'Keeway', 'Kimi', 'KL Mobility / Piper', 'Knievel', 'Kreidler', 'KSR', 'KTM', 'Kumpan',
    'Kymco', 'Lambretta', 'Laverda', 'Lifan', 'Linhai', 'LiveWire', 'LML', 'Loncin', 'Luxxon', 'Maico',
    'Malaguti', 'Mash', 'MBK', 'Megelli', 'Metorbike', 'Motobi', 'Moto Guzzi', 'Moto Morini', 'Motowell',
    'Motron', 'MV Agusta', 'Mz', 'NAON', 'Nerva', 'NITO', 'NIU', 'Norton', 'NSU', 'Odes', 'Online',
    'Pegasus', 'Peugeot', 'PGO', 'Piaggio', 'Piper', 'PohlBock', 'Polaris', 'Puch', 'QJ Motor', 'Quadix',
    'Quadro', 'Ray', 'Rewaco', 'RGNT', 'Rieju', 'Rivero', 'Royal Alloy', 'Royal Enfield', 'Sachs', 'Scrooser',
    'Seat', 'Segway', 'Seikel', 'Sherco', 'Shineray', 'Si.o', 'Silence', 'Simson', 'Skyteam', 'SMC', 'Stark',
    'Steereon', 'Stels', 'Super Soco', 'Sur-Ron', 'Suzuki', 'SWM', 'SYM', 'Talaria', 'Tauris', 'TGB',
    'Thunderbike', 'TiSTO', 'TM', 'Triton', 'Triumph', 'TRS', 'UM', 'Ural', 'Vespa', 'VICTORY', 'VOGE',
    'Voltago', 'Voxan', 'WMI', 'Yamaha', 'Zero', 'Zhongyu', 'Zontes', 'Zündapp', 'Other'
];

const BikeCreate = () => {
    const initialBikeData = {
        model: '',
        manufacturer: '',
        color: '',
        engineCapacity: '',
        price: '',
        year: '',
        used: false,
        img: ''
    };


    return (
        <div className={styles.bikeFormContainer}>
            <form className={styles.bikeForm}>
                <h2>Create a New Bike</h2>

                <div className={styles.inputGroup}>
                    <label htmlFor="model">Model</label>
                    <input
                        type="text"
                        id="model"
                        name="model"
                        value={initialBikeData.model}
                        required
                    />
                </div>

                <div className={styles.inputGroup}>
                    <label htmlFor="manufacturer">Manufacturer</label>
                    <select
                        id="manufacturer"
                        name="manufacturer"
                        value={initialBikeData.manufacturer}
                        required
                    >
                        <option value="">Select a manufacturer</option>
                        {manufacturers.map((manufacturer, index) => (
                            <option key={index} value={manufacturer}>{manufacturer}</option>
                        ))}
                    </select>
                </div>

                <div className={styles.inputGroup}>
                    <label htmlFor="color">Color</label>
                    <input
                        type="text"
                        id="color"
                        name="color"
                        value={initialBikeData.color}
                        required
                    />
                </div>

                <div className={styles.inputGroup}>
                    <label htmlFor="engineCapacity">Engine Capacity (cc)</label>
                    <input
                        type="number"
                        id="engineCapacity"
                        name="engineCapacity"
                        value={initialBikeData.engineCapacity}
                        required
                    />
                </div>

                <div className={styles.inputGroup}>
                    <label htmlFor="price">Price ($)</label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        value={initialBikeData.price}
                        required
                    />
                </div>

                <div className={styles.inputGroup}>
                    <label htmlFor="year">Year</label>
                    <input
                        type="number"
                        id="year"
                        name="year"
                        value={initialBikeData.year}
                        min="1885"
                        max="2024"
                        required
                    />
                </div>



                <div className={styles.inputGroup}>
                    <label htmlFor="img">Image URL</label>
                    <input
                        type="text"
                        id="img"
                        name="img"
                        value={initialBikeData.img}
                    />
                </div>

                <div className={styles.inputGroupUsed}>
                    <label htmlFor="used">Used</label>
                    <input
                        type="checkbox"
                        id="used"
                        name="used"
                        checked={initialBikeData.used}
                    />
                </div>

                <button type="submit" className={styles.submitButton}>Create Bike</button>
            </form>
        </div>
    );
};

export default BikeCreate;
