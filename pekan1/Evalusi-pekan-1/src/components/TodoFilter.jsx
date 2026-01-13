export default function TodoFilter({ activeFilter, onChange }) {

    const filters = ['all', 'active', 'completed']
    return (
        <div className="flex gap-4 text-sm">
            {filters.map((filter) => (
                <button
                    key={filter}
                    onClick={() => onChange(filter)}
                    className={activeFilter === filter
                        ? 'font-bold underline text-gray-900'
                        : 'text-gray-600 hover:text-black'
                    }
                >
                    {filter === 'all' ? 'Semua' : filter === 'active' ? 'Aktif' : 'Selesai'}
                </button>
            ))}
        </div>
    )
}