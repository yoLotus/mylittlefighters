# frozen_string_literal: true

json.array! @fights, partial: 'fights/fight', as: :fight
