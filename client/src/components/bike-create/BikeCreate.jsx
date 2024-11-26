import { useState } from 'react';
import styles from './BikeCreate.module.css';
import { useCreateBike } from '../../hooks/useBikesData';
import { BikeCreateSchema } from '../../schemas/bikeSchema';

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

const initialValues = {
    model: '',
    manufacturer: '',
    color: '',
    engineCapacity: '',
    price: '',
    year: '',
    used: false,
    img: '',
    description: ''
};

export default function BikeCreate() {
    const [validationErrors, setValidationErrors] = useState({});
    const [bikeFormValues, setbikeFormValues] = useState(initialValues);
    const [newBike, serverError, loading, createBike, clearServerError, setLoading] = useCreateBike();

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            console.log(bikeFormValues);
            await BikeCreateSchema.validate(bikeFormValues, { abortEarly: false })
            setLoading(true)
            setValidationErrors({});
            clearServerError();
            await createBike(bikeFormValues);
        } catch (error) {
            if (error.name === 'ValidationError') {
                const errors = error.inner.reduce((acc, err) => {
                    acc[err.path] = err.message;
                    return acc;
                }, {});
                setValidationErrors(errors);
                setLoading(false);
                console.log(errors);
            } else {
                setValidationErrors({});
                console.error('Unexpected error:', error.message);
                setLoading(false)
            }
        }
    };

    const changeHandler = (e) => {
        const { name, value, checked, type } = e.target;

        setbikeFormValues(oldBike => ({
            ...oldBike,
            [name]: type === 'checkbox' ? checked : value

        }))
    };

    return (
        <>
            {serverError && (
                <div className={styles.serverError}>
                    <p className={styles.errorMessage}>Server error: {serverError}</p>
                    <p className={styles.errorMessage}>Please try again:</p>

                    <button
                        className={styles.servErrorBtn}
                        onClick={() => clearServerError()}
                    >
                        Try again
                    </button>
                </div>
            )}

            < div className={styles.bikeFormContainer}>
                {(!loading && !serverError) &&
                    < form
                        className={styles.bikeForm}
                        onSubmit={submitHandler}
                    >
                        <h2>Create a New Bike</h2>

                        <div className={styles.inputGroup}>
                            <label htmlFor="model">Model</label>
                            <input
                                type="text"
                                id="model"
                                name="model"
                                value={bikeFormValues.model}
                                onChange={changeHandler}
                            />
                            {validationErrors.model && <p className={styles.validationError}>{validationErrors.model}</p>}

                        </div>

                        <div className={styles.inputGroup}>
                            <label htmlFor="manufacturer">Manufacturer</label>
                            <select
                                id="manufacturer"
                                name="manufacturer"
                                onChange={changeHandler}
                                value={bikeFormValues.manufacturer}
                            >
                                <option value="">Select a manufacturer</option>
                                {manufacturers.map((manufacturer, index) => (
                                    <option key={index} value={manufacturer}>{manufacturer}</option>
                                ))}
                            </select>
                            {validationErrors.manufacturer && <p className={styles.validationError}>{validationErrors.manufacturer}</p>}

                        </div>

                        <div className={styles.inputGroup}>
                            <label htmlFor="color">Color</label>
                            <input
                                type="text"
                                id="color"
                                name="color"
                                value={bikeFormValues.color}
                                onChange={changeHandler}
                            />
                            {validationErrors.color && <p className={styles.validationError}>{validationErrors.color}</p>}

                        </div>

                        <div className={styles.inputGroup}>
                            <label htmlFor="engineCapacity">Engine Capacity (cc)</label>
                            <input
                                type="number"
                                id="engineCapacity"
                                name="engineCapacity"
                                value={bikeFormValues.engineCapacity}
                                onChange={changeHandler}
                            />
                            {validationErrors.engineCapacity && <p className={styles.validationError}>{validationErrors.engineCapacity}</p>}
                        </div>

                        <div className={styles.inputGroup}>
                            <label htmlFor="price">Price ($)</label>
                            <input
                                type="number"
                                id="price"
                                name="price"
                                value={bikeFormValues.price}
                                onChange={changeHandler}
                            />
                            {validationErrors.price && <p className={styles.validationError}>{validationErrors.price}</p>}
                        </div>

                        <div className={styles.inputGroup}>
                            <label htmlFor="year">Year</label>
                            <input
                                type="number"
                                id="year"
                                name="year"
                                value={bikeFormValues.year}
                                onChange={changeHandler}
                                min="1885"
                                max="2024"
                            />
                            {validationErrors.year && <p className={styles.validationError}>{validationErrors.year}</p>}
                        </div>

                        <div className={styles.inputGroup}>
                            <label htmlFor="img">Image URL</label>
                            <input
                                type="text"
                                id="img"
                                name="img"
                                value={bikeFormValues.img}
                                onChange={changeHandler}
                            />
                            {validationErrors.img && <p className={styles.validationError}>{validationErrors.img}</p>}
                        </div>

                        <div className={styles.inputGroupUsed}>
                            <label htmlFor="used">Used</label>
                            <input
                                type="checkbox"
                                id="used"
                                name="used"
                                value={bikeFormValues.used}
                                onChange={changeHandler}
                            />
                        </div>
                        <div className={styles.inputGroup}>
                            <label htmlFor="description">Description</label>
                            <textarea
                                id="description"
                                name="description"
                                value={bikeFormValues.description}
                                onChange={changeHandler}
                                rows="4"
                            />
                            {validationErrors.description && <p className={styles.validationError}>{validationErrors.description}</p>}
                        </div>

                        {validationErrors && <p className={styles.validationError}>Some of the fields are not populated!</p>}
                        <button type="submit" className={styles.submitButton}>Create Bike</button>
                    </form>}
                {loading && (
                    <div className={styles.loadingContainer}>
                        <div className={styles.spinner}></div>
                        <p>Loading...</p>
                    </div>
                )}
            </div >
        </>

    );
};

// 