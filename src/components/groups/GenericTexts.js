import '../../App.css';

function GenericTexts(props) {
    const { manifest } = props;

    return (
        <div>
            <h1>{manifest.headline}</h1>
            <h2>{manifest.subtitle}</h2>
            <p>{manifest.body}</p>
        </div>
    );
}

export default GenericTexts;