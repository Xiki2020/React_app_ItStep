import React from 'react'

import "./modal.css"

function MyModal({
	visible = false,
	title,
	saveButtonShow = false,
	closeButtonShow = false,
	children,
	onCancel,
	onConfirm
}) {
	return (
		<div className={`md-modal ${visible ? 'md-show' : 'md-hidden'}`} tabIndex="-1">
			<div className="modal-dialog">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">{title}</h5>
						<button
							type="button"
							className="btn-close"
							data-dismiss="modal"
							aria-label="Close"
							onClick={onCancel}
						/>
					</div>
					<div className="modal-body">
						{children}
					</div>
					<div className="modal-footer">
						{closeButtonShow &&
							<button
								type="button"
								className="btn btn-secondary"
								data-dismiss="modal"
								onClick={onCancel}
							>
								Close
							</button>
						}
						{saveButtonShow &&
							<button
								type="button"
								className="btn btn-primary"
								onClick={onConfirm}
							>
								Save changes
							</button>
						}
					</div>
				</div>
			</div>
		</div>

	)
}

export default MyModal