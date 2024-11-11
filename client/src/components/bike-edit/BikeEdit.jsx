import React, { useEffect, useState } from 'react';
import styles from './BikeEdit.module.css';
import { useForm } from '../../hooks/useForm';
import { useNavigate, useParams } from 'react-router-dom';
import { useEditBike, useGetOneBike } from '../../hooks/useBikesData';

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

export default function BikeEdit() {
    const { bikeId } = useParams();
    const navigate = useNavigate();
    const [initialBikeData, getOneBikeError] = useGetOneBike(bikeId);
    const { editedBike, error, loading, editBike } = useEditBike();

    //TODO: Error handling

    const editHandler = async () => {
        await editBike(values);
        if (error) {
            console.log(error);
        }
        if (!error && !loading) {
            navigate(`/bikes/${values._id}/details`);
        }
    };

    const { values, changeHandler, submitHandler, setValues } = useForm(
        initialBikeData,
        editHandler
    );

    useEffect(() => {
        if (initialBikeData) {
            setValues(initialBikeData);
            // setLoading(false)
        }
    }, [initialBikeData, setValues]);

    if (loading) return <div>Loading...</div>;
    if (getOneBikeError) return <div>Error loading bike data!</div>;

    return (
        < div className={styles.bikeFormContainer} >
            <form
                className={styles.bikeForm}
                onSubmit={submitHandler}
            >
                <h2>Create a New Bike</h2>

                <div className={styles.inputGroup}>
                    <label htmlFor="model">Model</label>
                    <input
                        // defaultValue={bike.model}
                        type="text"
                        id="model"
                        name="model"
                        onChange={changeHandler}
                        value={values.model || ''}
                        required
                    />
                </div>

                <div className={styles.inputGroup}>
                    <label htmlFor="manufacturer">Manufacturer</label>
                    <select
                        id="manufacturer"
                        name="manufacturer"
                        onChange={changeHandler}
                        value={values.manufacturer || ''}
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
                        onChange={changeHandler}
                        value={values.color || ''}
                        required
                    />
                </div>

                <div className={styles.inputGroup}>
                    <label htmlFor="engineCapacity">Engine Capacity (cc)</label>
                    <input
                        type="number"
                        id="engineCapacity"
                        name="engineCapacity"
                        onChange={changeHandler}
                        value={values.engineCapacity || ''}
                        required
                    />
                </div>

                <div className={styles.inputGroup}>
                    <label htmlFor="price">Price ($)</label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        onChange={changeHandler}
                        value={values.price || ''}
                        required
                    />
                </div>

                <div className={styles.inputGroup}>
                    <label htmlFor="year">Year</label>
                    <input
                        type="number"
                        id="year"
                        name="year"
                        onChange={changeHandler}
                        value={values.year || ''}
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
                        onChange={changeHandler}
                        value={values.img || ''}
                    />
                </div>

                <div className={styles.inputGroupUsed}>
                    <label htmlFor="used">Used</label>
                    <input
                        type="checkbox"
                        id="used"
                        name="used"
                        onChange={changeHandler}
                        checked={values.used || false}
                    />
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="description">Description</label>
                    <textarea
                        id="description"
                        name="description"
                        onChange={changeHandler}
                        value={values.description || ''}
                        rows="4"
                    />
                </div>

                <button type="submit" className={styles.submitButton}>Edit Bike</button>
            </form>
        </div >
    );
};